import React, { FC } from "react";
import { Helmet } from "react-helmet";

// import utils
import pages from "utils/pages";

// import containers
import ArticleContainer from "containers/article/ArticleContainer";

const Article: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{pages.article.title}</title>
    </Helmet>
    <ArticleContainer />
  </>
);

export default Article;
