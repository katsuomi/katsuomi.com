import loadable from "@loadable/component";

export const Home = loadable(() => import("./components/templates/home/Home"));
export const Admin = loadable(() => import("./components/templates/admin/Admin"));
export const AdminCreateArticle = loadable(() =>
  import("./components/templates/admin/AdminCreateArticle")
);
export const AdminArticles = loadable(() =>
  import("./components/templates/admin/AdminArticles")
);
export const Article = loadable(() => import("./components/templates/article/Article"));
export const ArticleEdit = loadable(() => import("./components/templates/article/ArticleEdit"));
export const Tag = loadable(() => import("./components/templates/tag/Tag"));
export const Contact = loadable(() => import("./components/templates/contact/Contact"));
export const Profile = loadable(() => import("./components/templates/profile/Profile"));
