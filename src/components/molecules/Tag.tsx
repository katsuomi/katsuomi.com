/**
 *
 * Tag
 *
 */

import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

// import utils
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

// import methods
import { getArticleCountByTag } from "methods/tagMethods";

interface DefaultProps {
  text: string;
  isArticleCount: boolean;
}

const TagWrapper = styled.span`
  background-color: ${colors.BG_TAG};
  color: ${colors.WHITE};
  padding: 6px 15px;
  border-radius: 20px;
  margin: 10px 5px;
`;

const ArticleCountWrapper = styled.span`
  font-size: ${fontSize.BODY};
  margin-left: 2px;
`;

const ArticleCount = styled.span`
  font-size: ${fontSize.CAPTION};
  font-weight: bold;
`;

const Tag: FC<DefaultProps> = ({ text, isArticleCount }) => {
  const [articleCount, setArticleCount] = useState<number>(0);

  const getData = async () => {
    const data = await getArticleCountByTag(text);
    setArticleCount(data);
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <TagWrapper>
      {text}
      {isArticleCount && (
        <ArticleCountWrapper>
          (<ArticleCount>{articleCount}</ArticleCount>)
        </ArticleCountWrapper>
      )}
    </TagWrapper>
  );
};

export default Tag;
