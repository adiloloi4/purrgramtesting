import { useCourseStore } from '@/store/courseStore';

// XP reward configuration
export const GAME_XP_REWARD_INTERVAL = 5 * 60 * 1000; // 5 minutes in milliseconds
export const GAME_XP_PER_INTERVAL = 25; // XP per 5 minutes

// Track play time and award XP
export function useGameXP(gameId: string) {
  const { awardXP } = useCourseStore();
  
  // Get last XP reward time from localStorage
  const getLastXPRewardTime = (): number => {
    if (typeof window === 'undefined') return 0;
    const stored = localStorage.getItem(`game_xp_${gameId}`);
    return stored ? parseInt(stored, 10) : 0;
  };

  const updateLastXPRewardTime = (time: number) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(`game_xp_${gameId}`, time.toString());
  };

  const checkAndAwardXP = (currentTime: number): number => {
    const lastReward = getLastXPRewardTime();
    const timeSinceLastReward = currentTime - lastReward;

    if (timeSinceLastReward >= GAME_XP_REWARD_INTERVAL) {
      awardXP(GAME_XP_PER_INTERVAL);
      updateLastXPRewardTime(currentTime);
      return GAME_XP_PER_INTERVAL;
    }
    return 0;
  };

  return { checkAndAwardXP, getLastXPRewardTime, updateLastXPRewardTime };
}

// Generate many rounds for each game type
export function generateGameRounds<T>(
  baseRounds: T[],
  count: number = 50
): T[] {
  // Repeat and shuffle the base rounds to create many variations
  const rounds: T[] = [];
  for (let i = 0; i < count; i++) {
    const roundIndex = i % baseRounds.length;
    rounds.push({ ...baseRounds[roundIndex], id: `${baseRounds[roundIndex]}-${i}` });
  }
  // Shuffle for randomness
  return rounds.sort(() => Math.random() - 0.5);
}

// Get random round from pool
export function getRandomRound<T>(rounds: T[]): T {
  return rounds[Math.floor(Math.random() * rounds.length)];
}

