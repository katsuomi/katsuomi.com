// import utils
import firebase from "utils/firebase";
// import models
import * as Model from "models/tagModel";

// タグを全て取得
export const getTags = async () => {
  try {
    const tags: Model.Tag[] = [];
    await firebase
      .firestore()
      .collection("tags")
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          return;
        }
        snapshot.forEach(doc => {
          tags.push({
            id: doc.id,
            text: doc.data().text
          });
        });
      })
      .catch(err => {
        throw new Error(err.message);
      });
    return { tags };
  } catch (error) {
    return { error };
  }
};
