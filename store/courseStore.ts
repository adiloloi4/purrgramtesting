import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { loadCourseProgress, saveCourseProgress } from '@/lib/supabase/courseProgress';
import { curriculum } from '@/data/curriculum';

export type Badge = {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  unlockedAt?: string;
};

export type CourseState = {
  completedWorlds: number[];
  completedMissions: { [worldId: number]: string[] };
  completedAllInOneCheckpoints: { [worldId: number]: string[] };
  completedAllInOneMissions: number[];
  currentStreak: number;
  xp: number;
  lastMissionCompletedDate: string | null;
  unlockedBadges: string[];

  markMissionComplete: (worldId: number, missionId: string) => void;
  markWorldComplete: (worldId: number) => void;
  markAllInOneCheckpointComplete: (worldId: number, checkpointId: string) => void;
  markAllInOneMissionComplete: (worldId: number, xpReward?: number) => void;
  awardXP: (amount: number) => void;
  unlockBadge: (badgeId: string) => Badge | null;
  getUnlockedBadges: () => Badge[];
  loadFromDatabase: () => Promise<void>;
  syncToDatabase: () => Promise<void>;
  unlockAll: () => void; // For testing
  
  // Helper functions (computed values usually handled in components, but can be helpers here)
  isWorldUnlocked: (worldId: number) => boolean;
  isWorldCompleted: (worldId: number) => boolean;
  missionStatus: (worldId: number, missionId: string) => "locked" | "in_progress" | "completed";
};

export const useCourseStore = create<CourseState>()(
  persist(
    (set, get) => ({
      completedWorlds: [],
      completedMissions: {},
      completedAllInOneCheckpoints: {},
      completedAllInOneMissions: [],
      currentStreak: 0,
      xp: 0,
      lastMissionCompletedDate: null,
      unlockedBadges: [],

      markMissionComplete: (worldId, missionId) => {
        const state = get();
        const worldMissions = state.completedMissions[worldId] || [];
        
        if (worldMissions.includes(missionId)) return; // Already completed

        // Update streak logic (simple check for today vs last date)
        const today = new Date().toISOString().split('T')[0];
        let newStreak = state.currentStreak;
        
        if (state.lastMissionCompletedDate !== today) {
             // In a real app, check if it was yesterday to increment, otherwise reset or keep same if same day
             // For this gamification, we just increment if it's a new day or 0.
             // If we want a true streak, we check if yesterday == lastMissionCompletedDate
             
             // Simple version: if today > lastDate, increment. 
             // Ideally check if today - lastDate <= 1 day.
             newStreak += 1;
        }

        const newCompletedMissions = {
          ...state.completedMissions,
          [worldId]: [...worldMissions, missionId]
        };
        
        // Check for badge unlocks
        const totalMissions = Object.values(newCompletedMissions).reduce((sum, arr) => sum + arr.length, 0);
        let newBadges: string[] = [...state.unlockedBadges];
        let newlyUnlockedBadge: string | null = null;
        
        // First Mission badge
        if (totalMissions === 1 && !newBadges.includes('first-mission')) {
          newBadges.push('first-mission');
          newlyUnlockedBadge = 'first-mission';
        }
        
        // 10 Missions badge
        if (totalMissions === 10 && !newBadges.includes('mission-master')) {
          newBadges.push('mission-master');
          newlyUnlockedBadge = 'mission-master';
        }
        
        // Streak badges
        if (newStreak === 7 && !newBadges.includes('streak-7')) {
          newBadges.push('streak-7');
          newlyUnlockedBadge = 'streak-7';
        }
        
        if (newStreak === 30 && !newBadges.includes('streak-30')) {
          newBadges.push('streak-30');
          newlyUnlockedBadge = 'streak-30';
        }

        const newState = {
          completedMissions: newCompletedMissions,
          xp: state.xp + 10,
          currentStreak: newStreak,
          lastMissionCompletedDate: today,
          unlockedBadges: newBadges
        };
        set(newState);
        // Sync to database
        saveCourseProgress(newState).catch(() => {});
      },

      markWorldComplete: (worldId) => {
         const state = get();
         if (state.completedWorlds.includes(worldId)) return;

         let newBadges = [...state.unlockedBadges];
         let newlyUnlockedBadge: string | null = null;
         
         // World Completion badge
         if (!newBadges.includes('world-explorer')) {
           newBadges.push('world-explorer');
           newlyUnlockedBadge = 'world-explorer';
         }
         
         // Founder Badge (World 10)
         if (worldId === 11 && !newBadges.includes('founder')) {
           newBadges.push('founder');
           newlyUnlockedBadge = 'founder';
         }

         const newState = {
           completedWorlds: [...state.completedWorlds, worldId],
           xp: state.xp + 100,
           unlockedBadges: newBadges
         };
         set(newState);
         // Sync to database
         saveCourseProgress(newState).catch(() => {});
      },

      markAllInOneCheckpointComplete: (worldId, checkpointId) => {
        const state = get();
        const worldCheckpoints = state.completedAllInOneCheckpoints[worldId] || [];
        
        if (worldCheckpoints.includes(checkpointId)) return; // Already completed

        const newState = {
          completedAllInOneCheckpoints: {
            ...state.completedAllInOneCheckpoints,
            [worldId]: [...worldCheckpoints, checkpointId]
          }
        };
        set(newState);
        // Sync to database
        saveCourseProgress(newState).catch(() => {});
      },

      markAllInOneMissionComplete: (worldId, xpReward = 50) => {
        const state = get();
        if (state.completedAllInOneMissions.includes(worldId)) return;

        // Award XP for completing all-in-one mission
        const newState = {
          completedAllInOneMissions: [...state.completedAllInOneMissions, worldId],
          xp: state.xp + xpReward
        };
        set(newState);
        // Sync to database
        saveCourseProgress(newState).catch(() => {});
      },

      awardXP: (amount: number) => {
        const state = get();
        const newState = {
          xp: state.xp + amount
        };
        set(newState);
        // Sync to database
        saveCourseProgress(newState).catch(() => {});
      },

      loadFromDatabase: async () => {
        const progress = await loadCourseProgress();
        if (progress) {
          set(progress);
        }
      },

      syncToDatabase: async () => {
        const state = get();
        await saveCourseProgress(state);
      },

      unlockBadge: (badgeId: string) => {
        const state = get();
        if (state.unlockedBadges.includes(badgeId)) return null;
        
        const badges: Record<string, Badge> = {
          'first-mission': {
            id: 'first-mission',
            title: 'First Steps',
            description: 'Completed your first mission',
            icon: '🎯',
            color: 'blue'
          },
          'mission-master': {
            id: 'mission-master',
            title: 'Mission Master',
            description: 'Completed 10 missions',
            icon: '⭐',
            color: 'purple'
          },
          'world-explorer': {
            id: 'world-explorer',
            title: 'World Explorer',
            description: 'Completed your first world',
            icon: '🌍',
            color: 'green'
          },
          'streak-7': {
            id: 'streak-7',
            title: 'On Fire',
            description: '7 day streak',
            icon: '🔥',
            color: 'orange'
          },
          'streak-30': {
            id: 'streak-30',
            title: 'Unstoppable',
            description: '30 day streak',
            icon: '💪',
            color: 'red'
          },
          'founder': {
            id: 'founder',
            title: 'Founder',
            description: 'Completed THE LAUNCH world',
            icon: '🚀',
            color: 'gold'
          }
        };
        
        const badge = badges[badgeId];
        if (!badge) return null;
        
        const newState = {
          unlockedBadges: [...state.unlockedBadges, badgeId]
        };
        set(newState);
        // Sync to database
        saveCourseProgress(newState).catch(() => {});
        
        return { ...badge, unlockedAt: new Date().toISOString() };
      },

      getUnlockedBadges: () => {
        const state = get();
        const badges: Record<string, Badge> = {
          'first-mission': {
            id: 'first-mission',
            title: 'First Steps',
            description: 'Completed your first mission',
            icon: '🎯',
            color: 'blue'
          },
          'mission-master': {
            id: 'mission-master',
            title: 'Mission Master',
            description: 'Completed 10 missions',
            icon: '⭐',
            color: 'purple'
          },
          'world-explorer': {
            id: 'world-explorer',
            title: 'World Explorer',
            description: 'Completed your first world',
            icon: '🌍',
            color: 'green'
          },
          'streak-7': {
            id: 'streak-7',
            title: 'On Fire',
            description: '7 day streak',
            icon: '🔥',
            color: 'orange'
          },
          'streak-30': {
            id: 'streak-30',
            title: 'Unstoppable',
            description: '30 day streak',
            icon: '💪',
            color: 'red'
          },
          'founder': {
            id: 'founder',
            title: 'Founder',
            description: 'Completed THE LAUNCH world',
            icon: '🚀',
            color: 'gold'
          }
        };
        
        return state.unlockedBadges.map(id => badges[id]).filter(Boolean) as Badge[];
      },

      unlockAll: () => {
        // Build completed missions object
        const completedMissions: { [worldId: number]: string[] } = {};
        const completedAllInOneCheckpoints: { [worldId: number]: string[] } = {};
        const completedAllInOneMissions: number[] = [];
        const completedWorlds: number[] = [];
        let totalXP = 0;
        const today = new Date().toISOString().split('T')[0];

        // Iterate through all phases and worlds
        curriculum.phases.forEach((phase) => {
          phase.worlds.forEach((world) => {
            // Mark all missions as completed
            if (world.missions && world.missions.length > 0) {
              completedMissions[world.id] = world.missions.map((mission) => mission.id);
              totalXP += world.missions.length * 10; // 10 XP per mission
            }

            // Mark all-in-one mission checkpoints and mission as completed
            if (world.allInOneMission) {
              completedAllInOneCheckpoints[world.id] = world.allInOneMission.checkpoints.map(
                (checkpoint) => checkpoint.id
              );
              completedAllInOneMissions.push(world.id);
              totalXP += world.allInOneMission.totalXpReward || 50; // Use totalXpReward from curriculum
            }

            // Mark world as completed
            completedWorlds.push(world.id);
            totalXP += 100; // 100 XP per world
          });
        });

        // Unlock all badges
        const allBadges = [
          'first-mission',
          'mission-master',
          'world-explorer',
          'streak-7',
          'streak-30',
          'founder'
        ];

        const newState = {
          completedWorlds,
          completedMissions,
          completedAllInOneCheckpoints,
          completedAllInOneMissions,
          xp: totalXP,
          currentStreak: 30,
          lastMissionCompletedDate: today,
          unlockedBadges: allBadges
        };

        set(newState);
        // Sync to database
        saveCourseProgress(newState).catch(() => {});
      },

      isWorldUnlocked: (worldId) => {
        const state = get();
        if (worldId === 0) return true;
        
        const hasFounderBadge = state.unlockedBadges.includes('founder');
        
        // World 11 locked until 9 completed
        if (worldId === 11) {
            return state.completedWorlds.includes(9);
        }
        
        // World 12 (The Public Build Bonus) unlocked with Founder Badge or by completing world 11
        if (worldId === 12) {
            return hasFounderBadge || state.completedWorlds.includes(11);
        }
        
        // World 13 (Phase 5: The Blueprint) unlocked with Founder Badge or when all phases 0-4 are completed
        // Phases 0-4 contain worlds: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
        if (worldId === 13) {
            if (hasFounderBadge) return true;
            const requiredWorlds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            return requiredWorlds.every(world => state.completedWorlds.includes(world));
        }
        
        // General rule: World X unlocked if World X-1 completed
        return state.completedWorlds.includes(worldId - 1);
      },

      isWorldCompleted: (worldId) => {
        return get().completedWorlds.includes(worldId);
      },

      missionStatus: (worldId, missionId) => {
        const state = get();
        if (state.completedMissions[worldId]?.includes(missionId)) {
          return "completed";
        }
        
        if (state.isWorldUnlocked(worldId)) {
            // Check if world unlocked
            return "in_progress";
        }

        return "locked";
      }

    }),
    {
      name: 'purrgram-course-storage',
      onRehydrateStorage: () => async (state, error) => {
        // After rehydrating from localStorage, load from database to ensure we have the latest data
        // Database data takes priority over localStorage
        if (!error && typeof window !== 'undefined') {
          try {
            const progress = await loadCourseProgress();
            if (progress) {
              // Update state with database data (database takes priority)
              const store = useCourseStore.getState();
              store.loadFromDatabase();
            }
          } catch (error) {
          }
        }
      },
    }
  )
);

