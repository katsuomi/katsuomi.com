/**
 *
 * articleMethods
 *
 */

import "firebase/firestore";
// import models
import * as Model from "models/articleModel";

// 日付を文字列に
export const dateToString = (date: Date | Model.TimeStamp): string => {
  if(date instanceof Date) {
    const result = date.toLocaleDateString();
    return result;
  }
  const dateTime = new Date(date.seconds * 1000);
  const result = dateTime.toLocaleDateString();

  return result;
};

// TimeStamp型をDate型に
export const timeStampToDate = (date: Date | Model.TimeStamp): Date => {
  if(date instanceof Date) {
    return new Date();
  }
  const dateTime = new Date(date.seconds * 1000);
  return dateTime;
};
