import { createClient } from './client';
import type { CourseState } from '@/store/courseStore';

/**
 * Load course progress from Supabase
 */
export async function loadCourseProgress(): Promise<Partial<CourseState> | null> {
  const supabase = createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  try {
    // Load profile data (XP, streak, badges)
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('xp, current_streak, last_mission_completed_date, unlocked_badges')
      .eq('id', user.id)
      .single();

    if (profileError) {
      return null;
    }

    // Load course progress data
    const { data: progress, error: progressError } = await supabase
      .from('course_progress')
      .select('completed_worlds, completed_missions, completed_all_in_one_checkpoints, completed_all_in_one_missions')
      .eq('user_id', user.id)
      .single();

    if (progressError && progressError.code !== 'PGRST116') { // PGRST116 = no rows returned
      // Create progress entry if it doesn't exist
      const { error: insertError } = await supabase
        .from('course_progress')
        .insert({
          user_id: user.id,
          completed_worlds: [],
          completed_missions: {},
          completed_all_in_one_checkpoints: {},
          completed_all_in_one_missions: [],
        });

      if (insertError) {
        // Error creating course progress - silently fail
      }

      return {
        xp: profile.xp || 0,
        currentStreak: profile.current_streak || 0,
        lastMissionCompletedDate: profile.last_mission_completed_date || null,
        unlockedBadges: profile.unlocked_badges || [],
        completedWorlds: [],
        completedMissions: {},
        completedAllInOneCheckpoints: {},
        completedAllInOneMissions: [],
      };
    }

    // Convert JSONB to proper types
    const completedMissions: { [worldId: number]: string[] } = {};
    if (progress?.completed_missions) {
      Object.entries(progress.completed_missions as Record<string, string[]>).forEach(([key, value]) => {
        completedMissions[parseInt(key)] = value;
      });
    }

    const completedAllInOneCheckpoints: { [worldId: number]: string[] } = {};
    if (progress?.completed_all_in_one_checkpoints) {
      Object.entries(progress.completed_all_in_one_checkpoints as Record<string, string[]>).forEach(([key, value]) => {
        completedAllInOneCheckpoints[parseInt(key)] = value;
      });
    }

    return {
      xp: profile.xp || 0,
      currentStreak: profile.current_streak || 0,
      lastMissionCompletedDate: profile.last_mission_completed_date || null,
      unlockedBadges: profile.unlocked_badges || [],
      completedWorlds: progress?.completed_worlds || [],
      completedMissions,
      completedAllInOneCheckpoints,
      completedAllInOneMissions: progress?.completed_all_in_one_missions || [],
    };
  } catch (error) {
    return null;
  }
}

/**
 * Save course progress to Supabase
 */
export async function saveCourseProgress(state: Partial<CourseState>): Promise<boolean> {
  const supabase = createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  try {
    // Update profile (XP, streak, badges)
    const profileUpdate: any = {};
    if (state.xp !== undefined) profileUpdate.xp = state.xp;
    if (state.currentStreak !== undefined) profileUpdate.current_streak = state.currentStreak;
    if (state.lastMissionCompletedDate !== undefined) profileUpdate.last_mission_completed_date = state.lastMissionCompletedDate;
    if (state.unlockedBadges !== undefined) profileUpdate.unlocked_badges = state.unlockedBadges;

    if (Object.keys(profileUpdate).length > 0) {
      const { error: profileError } = await supabase
        .from('profiles')
        .update(profileUpdate)
        .eq('id', user.id);

      if (profileError) {
      }
    }

    // Update course progress
    const progressUpdate: any = {};
    if (state.completedWorlds !== undefined) progressUpdate.completed_worlds = state.completedWorlds;
    if (state.completedMissions !== undefined) progressUpdate.completed_missions = state.completedMissions;
    if (state.completedAllInOneCheckpoints !== undefined) progressUpdate.completed_all_in_one_checkpoints = state.completedAllInOneCheckpoints;
    if (state.completedAllInOneMissions !== undefined) progressUpdate.completed_all_in_one_missions = state.completedAllInOneMissions;

    if (Object.keys(progressUpdate).length > 0) {
      // Check if progress exists, if not create it
      const { data: existing } = await supabase
        .from('course_progress')
        .select('id')
        .eq('user_id', user.id)
        .single();

      if (existing) {
        const { error: progressError } = await supabase
          .from('course_progress')
          .update(progressUpdate)
          .eq('user_id', user.id);

        if (progressError) {
          return false;
        }
      } else {
        const { error: insertError } = await supabase
          .from('course_progress')
          .insert({
            user_id: user.id,
            completed_worlds: state.completedWorlds || [],
            completed_missions: state.completedMissions || {},
            completed_all_in_one_checkpoints: state.completedAllInOneCheckpoints || {},
            completed_all_in_one_missions: state.completedAllInOneMissions || [],
            ...progressUpdate,
          });

        if (insertError) {
          return false;
        }
      }
    }

    return true;
  } catch (error) {
    return false;
  }
}

