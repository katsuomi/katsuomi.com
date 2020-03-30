import loadable from "@loadable/component";

export const Home = loadable(() => import("./components/templates/Home"));
export const Admin = loadable(() => import("./components/templates/Admin"));
export const AdminCreateArticle = loadable(() =>
  import("./components/templates/AdminCreateArticle")
);
export const Article = loadable(() => import("./components/templates/Article"));
export const Awards = loadable(() => import("./components/templates/Awards"));
export const Contact = loadable(() => import("./components/templates/Contact"));
export const News = loadable(() => import("./components/templates/News"));
export const Products = loadable(() =>
  import("./components/templates/Products")
);
export const Profile = loadable(() => import("./components/templates/Profile"));
