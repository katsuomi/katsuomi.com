/**
 *
 * Tag
 *
 */

import React, { FC, useState, useEffect, useCallback } from "react";
import styled from "styled-components";

// import atoms
import LinkAnchor from "components/atoms/LinkAnchor";

// import utils
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

// import methods
import { getArticleCountByTag } from "methods/tagMethods";
import { encodeToString } from "methods/utilsMethods";

interface DefaultProps {
  text: string;
  isArticleCount: boolean;
}

const TagWrapper = styled.span`
  & > span > a {
    color: ${colors.WHITE};
  }
  background-color: ${colors.BG_TAG};
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

const Linkable = styled.span`
  &:hover {
    opacity: 0.5;
  }
`;

const Tag: FC<DefaultProps> = ({ text, isArticleCount }) => {
  const [articleCount, setArticleCount] = useState<number>(0);

  const getData = useCallback(async () => {
    const data = await getArticleCountByTag(text);
    setArticleCount(data);
  }, [text]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <TagWrapper>
      <LinkAnchor src={`/tags/${encodeToString(text)}`}>
        <Linkable>
          {text}
          {isArticleCount && (
            <ArticleCountWrapper>
              (<ArticleCount>{articleCount}</ArticleCount>)
            </ArticleCountWrapper>
          )}
        </Linkable>
      </LinkAnchor>
    </TagWrapper>
  );
};

export default Tag;
