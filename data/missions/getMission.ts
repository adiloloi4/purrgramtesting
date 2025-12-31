import { MissionData } from "./world0";
import { tutorialMissions } from "./tutorial";
import { phase1Missions } from "./phase1";
import { phase2Missions } from "./phase2";
import { phase3Missions } from "./phase3";
import { phase4Missions } from "./phase4";
import { phase5Missions } from "./phase5";

export function getMissionContent(worldId: number, missionId: string): MissionData | null {
  // Phase 0: Tutorial (World 0)
  if (worldId === 0) {
    return tutorialMissions.find((m) => m.id === missionId) || null;
  }

  // Phase 1: Worlds 1, 2, 3
  if (worldId >= 1 && worldId <= 3) {
    return phase1Missions.find((m) => m.id === missionId) || null;
  }

  // Phase 2: Worlds 4, 5, 6, 7
  if (worldId >= 4 && worldId <= 7) {
    return phase2Missions.find((m) => m.id === missionId) || null;
  }

  // Phase 3: Worlds 8, 9
  if (worldId >= 8 && worldId <= 9) {
    return phase3Missions.find((m) => m.id === missionId) || null;
  }

  // Phase 4: Worlds 10, 11, 12
  if (worldId >= 10 && worldId <= 12) {
    return phase4Missions.find((m) => m.id === missionId) || null;
  }

  // Phase 5: World 13
  if (worldId === 13) {
    return phase5Missions.find((m) => m.id === missionId) || null;
  }

  return null;
}
