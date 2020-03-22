// import utils
import firebase from "utils/firebase";
// import models
import * as Model from "models/articleModel";

export const createAtricle = async (payload: Model.Article) => {
  try {
    await firebase
      .firestore()
      .collection("articles")
      .doc()
      .set(payload)
      .catch(err => {
        throw new Error(err.message);
      });
    const success = { success: "200 ok, success" };
    return { success };
  } catch (error) {
    return { error };
  }
};

export const getSlideShowArticles = async () => {
  try {
    const articles: Model.Article[] = [];
    await firebase
      .firestore()
      .collection("articles")
      .where("is_add_slide_show", "==", true)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          return;
        }
        snapshot.forEach(doc => {
          articles.push({
            uid: doc.id,
            content: doc.data().content,
            title: doc.data().title,
            date: doc.data().date,
            tag_ids: doc.data().tag_ids,
            thumbnail_image_path: doc.data().thumbnail_image_path
          });
        });
      })
      .catch(err => {
        throw new Error(err.message);
      });
    return { articles };
  } catch (error) {
    return { error };
  }
};
