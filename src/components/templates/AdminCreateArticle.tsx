import React, { FC } from "react";
import { Helmet } from "react-helmet";

// import utils
import pages from "utils/pages";

// import containers
import AdminCreateArticleContainer from "containers/AdminCreateArticleContainer";

const AdminCreateArticle: FC = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "ja" }}>
        <title>{pages.adminCreateArticle.title}</title>
      </Helmet>
      <AdminCreateArticleContainer />
    </>
  );
};

export default AdminCreateArticle;
