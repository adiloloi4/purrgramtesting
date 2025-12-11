import { MissionData } from "../world0";
import { world1Missions } from "./world1";
import { world2Missions } from "./world2";
import { world3Missions } from "./world3";

export * from "./world1";
export * from "./world2";
export * from "./world3";

export const phase1Missions: MissionData[] = [
  ...world1Missions,
  ...world2Missions,
  ...world3Missions,
];
