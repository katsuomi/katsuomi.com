// import utils
import firebase from "utils/firebase";
// import models
import * as Model from "models/articleModel";


// 記事作成
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
  } catch(error) {
    return { error };
  }
};

// 記事更新
export const updateAtricle = async (payload: Model.Article) => {
  try {
    await firebase
      .firestore()
      .collection("articles")
      .doc(payload.uid)
      .update(payload)
      .catch(err => {
        throw new Error(err.message);
      });
    const success = { success: "200 ok, success" };
    return { success };
  } catch(error) {
    return { error };
  }
};

// 記事削除
export const deleteAtricle = async (payload: string) => {
  try {
    await firebase
      .firestore()
      .collection("articles")
      .doc(payload)
      .delete()
      .catch(err => {
        throw new Error(err.message);
      });
    const success = { success: "200 ok, success" };
    return { success };
  } catch(error) {
    return { error };
  }
};

// スライドショー用記事取得
export const getSlideShowArticles = async () => {
  try {
    const articles: Model.Article[] = [];
    await firebase
      .firestore()
      .collection("articles")
      .where("isAddSlideShow", "==", true)
      .get()
      .then(snapshot => {
        if(snapshot.empty) {
          return;
        }
        snapshot.forEach(doc => {
          articles.push({
            uid: doc.id,
            content: doc.data().content,
            title: doc.data().title,
            subTitle: doc.data().subTitle,
            date: doc.data().date,
            tagIds: doc.data().tagIds,
            goodCount: doc.data().goodCount,
            thumbnailImagePath: doc.data().thumbnailImagePath
          });
        });
      })
      .catch(err => {
        throw new Error(err.message);
      });
    return { articles };
  } catch(error) {
    return { error };
  }
};

// 最新の記事を5件取得
export const getLatestArticles = async () => {
  try {
    const articles: Model.Article[] = [];
    await firebase
      .firestore()
      .collection("articles")
      .orderBy("date", "desc")
      .limit(5)
      .get()
      .then(snapshot => {
        if(snapshot.empty) {
          return;
        }
        snapshot.forEach(doc => {
          articles.push({
            uid: doc.id,
            content: doc.data().content,
            subTitle: doc.data().subTitle,
            title: doc.data().title,
            date: doc.data().date,
            tagIds: doc.data().tagIds,
            goodCount: doc.data().goodCount,
            thumbnailImagePath: doc.data().thumbnailImagePath
          });
        });
      })
      .catch(err => {
        throw new Error(err.message);
      });
    return { articles };
  } catch(error) {
    return { error };
  }
};

// 記事を全て取得
export const getArticles = async () => {
  try {
    const articles: Model.Article[] = [];
    await firebase
      .firestore()
      .collection("articles")
      .orderBy("date", "desc")
      .get()
      .then(snapshot => {
        if(snapshot.empty) {
          return;
        }
        snapshot.forEach(doc => {
          articles.push({
            uid: doc.id,
            content: doc.data().content,
            subTitle: doc.data().subTitle,
            title: doc.data().title,
            date: doc.data().date,
            tagIds: doc.data().tagIds,
            goodCount: doc.data().goodCount,
            thumbnailImagePath: doc.data().thumbnailImagePath
          });
        });
      })
      .catch(err => {
        throw new Error(err.message);
      });
    return { articles };
  } catch(error) {
    return { error };
  }
};

// idに一致した記事を取得
export const getArticle = async (id: string) => {
  try {
    let article = null;
    await firebase
      .firestore()
      .collection("articles")
      .doc(id)
      .get()
      .then(doc => {
        if(!doc.exists) {
          return;
        }
        const data = Object.assign({}, doc.data());
        data.uid = doc.id;
        article = data;
      })
      .catch(err => {
        throw new Error(err.message);
      });
    return { article };
  } catch(error) {
    return { error };
  }
};

// タグ名に紐ずく記事の取得
export const getArticlesByTag = async (tagId: string) => {
  try {
    const articlesByTag: Model.Article[] = [];
    await firebase
      .firestore()
      .collection("articles")
      .orderBy("date", "desc")
      .where("tagIds", "array-contains", tagId)
      .get()
      .then(snapshot => {
        if(snapshot.empty) {
          return;
        }
        snapshot.forEach(doc => {
          articlesByTag.push({
            uid: doc.id,
            content: doc.data().content,
            subTitle: doc.data().subTitle,
            title: doc.data().title,
            date: doc.data().date,
            tagIds: doc.data().tagIds,
            goodCount: doc.data().goodCount,
            thumbnailImagePath: doc.data().thumbnailImagePath
          });
        });
      })
      .catch(err => {
        throw new Error(err.message);
      });
    return { articlesByTag };
  } catch(error) {
    return { error };
  }
};
