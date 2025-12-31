import { MissionData } from "../world0";
import { worldSurfaceMissions } from "./world_surface";
import { world3Missions } from "./world3";
import { world4Missions } from "./world4";
import { world5Missions } from "./world5";
import { world6Missions } from "./world6";

export * from "./world_surface";
export * from "./world3";
export * from "./world4";
export * from "./world5";
export * from "./world6";

export const phase2Missions: MissionData[] = [
  ...worldSurfaceMissions,
  ...world3Missions,
  ...world4Missions,
  ...world5Missions,
  ...world6Missions,
];

