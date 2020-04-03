import React, { FC } from "react";
import { Helmet } from "react-helmet";

// import utils
import pages from "utils/pages";

// import containers
import AdminCreateEditArticleContainer from "containers/admin/AdminCreateEditArticleContainer";

const AdminCreateArticle: FC = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "ja" }}>
        <title>{pages.adminCreateArticle.title}</title>
      </Helmet>
      <AdminCreateEditArticleContainer isCreate={true} />
    </>
  );
};

export default AdminCreateArticle;
