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
  articleEdit: {
    path: "/articles/:id/edit",
    title: "記事編集-- -Katsuomi.com-"
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
};

export default pages;
