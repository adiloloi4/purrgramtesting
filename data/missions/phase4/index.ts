import { MissionData } from "../world0";
import { world9Missions } from "./world9";
import { world10Missions } from "./world10";
import { world11Missions } from "./world11";

export * from "./world9";
export * from "./world10";
export * from "./world11";

export const phase4Missions: MissionData[] = [
  ...world9Missions,
  ...world10Missions,
  ...world11Missions,
];

