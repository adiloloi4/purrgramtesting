import { MissionData } from "./world0";
import { tutorialMissions } from "./tutorial";
import { phase1Missions } from "./phase1";
import { phase2Missions } from "./phase2";
import { phase3Missions } from "./phase3";
import { phase4Missions } from "./phase4";

export function getMissionContent(worldId: number, missionId: string): MissionData | null {
  // Phase 0: Tutorial (World 0)
  if (worldId === 0) {
    return tutorialMissions.find((m) => m.id === missionId) || null;
  }

  // Phase 1: Worlds 1, 2, 3
  if (worldId >= 1 && worldId <= 3) {
    return phase1Missions.find((m) => m.id === missionId) || null;
  }

  // Phase 2: Worlds 4, 5, 6
  if (worldId >= 4 && worldId <= 6) {
    return phase2Missions.find((m) => m.id === missionId) || null;
  }

  // Phase 3: Worlds 7, 8
  if (worldId >= 7 && worldId <= 8) {
    return phase3Missions.find((m) => m.id === missionId) || null;
  }

  // Phase 4: Worlds 9, 10, 11
  if (worldId >= 9 && worldId <= 11) {
    return phase4Missions.find((m) => m.id === missionId) || null;
  }

  return null;
}
