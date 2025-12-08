import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CourseState = {
  completedWorlds: number[];
  completedMissions: { [worldId: number]: string[] };
  currentStreak: number;
  xp: number;
  lastMissionCompletedDate: string | null;

  markMissionComplete: (worldId: number, missionId: string) => void;
  markWorldComplete: (worldId: number) => void;
  unlockAll: () => void; //delete later
  resetProgress: () => void; //delete later
  
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
      currentStreak: 0,
      xp: 0,
      lastMissionCompletedDate: null,

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

        set({
          completedMissions: {
            ...state.completedMissions,
            [worldId]: [...worldMissions, missionId]
          },
          xp: state.xp + 10,
          currentStreak: newStreak,
          lastMissionCompletedDate: today
        });
      },

      markWorldComplete: (worldId) => {
         const state = get();
         if (state.completedWorlds.includes(worldId)) return;

         set({
           completedWorlds: [...state.completedWorlds, worldId],
           xp: state.xp + 100
         });
      },

      //delete later
      unlockAll: () => {
          // IDs 0 to 10 based on curriculum
          const allWorldIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          set({
              completedWorlds: allWorldIds,
              xp: 1000 // Bonus XP
          });
      },

      //delete later
      resetProgress: () => {
        set({
            completedWorlds: [],
            completedMissions: {},
            currentStreak: 0,
            xp: 0,
            lastMissionCompletedDate: null
        });
      },

      isWorldUnlocked: (worldId) => {
        const state = get();
        if (worldId === 0) return true;
        // World 9 locked until 8 completed
        if (worldId === 9) {
            return state.completedWorlds.includes(8);
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
    }
  )
);

