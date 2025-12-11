import { MissionData } from "../world0";
import { world3Missions } from "./world3";
import { world4Missions } from "./world4";
import { world5Missions } from "./world5";

export * from "./world3";
export * from "./world4";
export * from "./world5";

export const phase2Missions: MissionData[] = [
  ...world3Missions,
  ...world4Missions,
  ...world5Missions,
];

