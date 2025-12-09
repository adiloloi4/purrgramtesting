import { MissionData } from "../world0";
import { mission01 } from "./mission01_manifesto";
import { mission02 } from "./mission02_tool-stack";
import { mission03 } from "./mission03_context-game";
import { mission04 } from "./mission04_ship-early";
import { mission05 } from "./mission05_ai-collaboration";
import { mission06 } from "./mission06_founder-mindset";
import { mission07 } from "./mission07_debugging-philosophy";
import { mission08 } from "./mission08_hello-world";

export * from "./mission01_manifesto";
export * from "./mission02_tool-stack";
export * from "./mission03_context-game";
export * from "./mission04_ship-early";
export * from "./mission05_ai-collaboration";
export * from "./mission06_founder-mindset";
export * from "./mission07_debugging-philosophy";
export * from "./mission08_hello-world";

export const phase1Missions: MissionData[] = [
  mission01,
  mission02,
  mission03,
  mission04,
  mission05,
  mission06,
  mission07,
  mission08,
];

