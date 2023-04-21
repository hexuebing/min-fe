/* eslint-disable no-console */
import { ReplaySubject } from "rxjs";
// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction(who) {
  console.log(`%c${who} is sing a song`, "color: skyblue");
}

export const sharedSubject = new ReplaySubject();
