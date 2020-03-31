/**
 *
 * pages
 *
 */

const pages = {
  home: {
    path: "/",
    title: "Katsuomi.com"
  },
  admin: {
    path: "/admin",
    title: "管理者画面 -Katsuomi.com-"
  },
  adminCreateArticle: {
    path: "/admin/create_article",
    title: "管理者-記事作成- -Katsuomi.com-"
  },
  adminArticles: {
    path: "/admin/articles",
    title: "管理者-記事一覧- -Katsuomi.com-"
  },
  article: {
    path: "/articles/:id",
    title: "記事詳細-- -Katsuomi.com-"
  },
  tag: {
    path: "/tags/:id",
    title: "タグ詳細-- -Katsuomi.com-"
  },
  contact: {
    path: "/contact",
    title: "お問い合わせ -Katsuomi.com-"
  },
  profile: {
    path: "/profile",
    title: "プロフィール -Katsuomi.com-"
  },
  news: {
    path: "/news",
    title: "お知らせ -Katsuomi.com-"
  },
  awards: {
    path: "/awards",
    title: "受賞歴 -Katsuomi.com-"
  },
  products: {
    path: "/products",
    title: "製作物 -Katsuomi.com-"
  }
};

export default pages;
