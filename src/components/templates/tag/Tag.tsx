import React, { FC } from "react";
import { Helmet } from "react-helmet";

// import utils
import pages from "utils/pages";

// import containers
import TagContainer from "containers/tag/TagContainer";

const Tag: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{pages.tag.title}</title>
    </Helmet>
    <TagContainer />
  </>
);

export default Tag;
