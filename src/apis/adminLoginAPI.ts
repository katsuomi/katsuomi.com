/**
 *
 * adminLoginAPI
 *
 */

// import utils
import firebase from "utils/firebase";
// import models
import * as Model from "models/adminLoginModel";

export const adminLogin = async (password: string) => {
  try {
    let user: Model.User = { uid: "" };
    const email: string = process.env.REACT_APP_ADMIN_EMAIL
      ? process.env.REACT_APP_ADMIN_EMAIL
      : "";
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        if (auth.user) {
          user.uid = auth.user.uid;
          if (auth.user.email) {
            user.email = auth.user.email;
          }
        }
      })
      .catch(err => {
        throw new Error(err.message);
      });
    return { user };
  } catch (error) {
    return { error };
  }
};

export const adminLoginCache = async () => {
  try {
    let user: Model.User = { uid: "" };
    const currentUser = await firebase.auth().currentUser;
    if (currentUser) {
      user.uid = currentUser.uid;
      if (currentUser.email) {
        user.email = currentUser.email;
      }
    } else {
      throw new Error("no cache");
    }
    return { user };
  } catch (error) {
    return { error };
  }
};
