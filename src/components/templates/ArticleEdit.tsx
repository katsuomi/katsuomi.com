import React, { FC } from "react";
import { Helmet } from "react-helmet";

// import utils
import pages from "utils/pages";

// import containers
import ArticleEditContainer from "containers/ArticleEditContainer";

const ArticleEdit: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{pages.articleEdit.title}</title>
    </Helmet>
    <ArticleEditContainer />
  </>
);

export default ArticleEdit;
