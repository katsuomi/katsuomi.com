/**
 *
 * articleMethods
 *
 */

import "firebase/firestore";
// import models
import * as Model from "models/articleModel";

class TimeStamp {
  seconds!: number;
  nanoseconds!: number;
}

// 日付を文字列に
export const dateToString = (date: Date | TimeStamp): string => {
  if (date instanceof Date) {
    return "undefined";
  }
  const dateTime = new Date(date.seconds * 1000);
  const result = dateTime.toLocaleDateString();

  return result;
};
