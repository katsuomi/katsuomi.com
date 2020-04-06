/**
 *
 * articleMethods
 *
 */

import "firebase/firestore";
// import models
import * as Model from "models/articleModel";

// 日付を文字列に
export const dateToString = (date: Date): string => {
  const result = date.toLocaleDateString();
  return result;
};

// TimeStamp型をDate型に
export const timeStampToDate = (date: Model.TimeStamp): Date => {
  const dateTime = new Date(date.seconds * 1000);
  return dateTime;
};
