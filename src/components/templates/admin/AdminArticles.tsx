import React, { FC } from "react";
import { Helmet } from "react-helmet";

// import utils
import pages from "utils/pages";

// import containers
import AdminArticlesContainer from "containers/admin/AdminArticlesContainer";

const AdminArticles: FC = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "ja" }}>
        <title>{pages.adminArticles.title}</title>
      </Helmet>
      <AdminArticlesContainer />
    </>
  );
};

export default AdminArticles;
