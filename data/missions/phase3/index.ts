import { MissionData } from "../world0";
import { world7Missions } from "./world7";
import { world8Missions } from "./world8";

export * from "./world7";
export * from "./world8";

export const phase3Missions: MissionData[] = [
  ...world7Missions,
  ...world8Missions,
];

