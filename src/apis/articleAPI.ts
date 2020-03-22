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
