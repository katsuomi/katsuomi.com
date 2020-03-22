/**
 *
 * tagMethods
 *
 */

import * as firebase from "firebase";
import "firebase/firestore";
// import models
import * as Model from "models/tagModel";

// タグの追加
export const addTag = (text: string): void => {
  firebase
    .firestore()
    .collection("tags")
    .doc(text)
    .set({
      text: text,
      id: text
    });
};

// タグの取得
export const getTags = async (): Promise<Model.Tag[]> => {
  const data: Model.Tag[] = [];

  await firebase
    .firestore()
    .collection("tags")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        data.push({ id: doc.data().id, text: doc.data().text });
      });
    })
    .catch(err => {
      throw Error(err);
    });

  return data;
};
