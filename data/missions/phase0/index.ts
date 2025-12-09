import { MissionData } from "../world0";
import { mission0A } from "./mission0A_vibecoding";
import { mission00 } from "./mission00_overview";
import { mission01 } from "./mission01_frontend";
import { mission02 } from "./mission02_backend";
import { mission03 } from "./mission03_api";
import { mission04 } from "./mission04_database";
import { mission05 } from "./mission05_devtools";
import { mission06 } from "./mission06_stack";

export * from "./mission0A_vibecoding";
export * from "./mission00_overview";
export * from "./mission01_frontend";
export * from "./mission02_backend";
export * from "./mission03_api";
export * from "./mission04_database";
export * from "./mission05_devtools";
export * from "./mission06_stack";

export const phase0Missions: MissionData[] = [
  mission0A,
  mission00,
  mission01,
  mission02,
  mission03,
  mission04,
  mission05,
  mission06,
];
