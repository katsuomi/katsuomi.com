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
import * as breakPoints from "utils/breakPoints";

// import methods
import { getArticleCountByTag } from "methods/tagMethods";
import { encodeToString } from "methods/utilsMethods";

interface DefaultProps {
  text: string;
  isArticleCount: boolean;
  isLinkable?: boolean;
}

const TagWrapper = styled.span`
  & > span > a {
    color: ${colors.WHITE};
  }
  background-color: ${colors.BG_TAG};
  border-radius: 20px;
  padding: ${breakPoints.isSmartPhone() ? '6px 10px' : '6px 15px'};
  margin: ${breakPoints.isSmartPhone() ? '5px 2px' : '10px 5px'};
  font-size: ${breakPoints.isSmartPhone() ? '15px' : 'auto'};
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

const Span = styled.span`
  color: ${colors.WHITE};
`;

const Tag: FC<DefaultProps> = ({ text, isArticleCount, isLinkable }) => {
  const [articleCount, setArticleCount] = useState<number>(0);

  const getData = useCallback(async () => {
    const data = await getArticleCountByTag(text);
    setArticleCount(data);
  }, [text]);

  useEffect(() => {
    getData();
  }, [getData]);


  const contentRender = () => {
    return (
      <>
        {text}
        {isArticleCount && (
          <ArticleCountWrapper>
            (<ArticleCount>{articleCount}</ArticleCount>)
          </ArticleCountWrapper>
        )}
      </>
    );
  };

  return (
    <TagWrapper>
      {isLinkable ?
        <LinkAnchor src={`/tags/${encodeToString(text)}`}>
          <Linkable>
            {contentRender()}
          </Linkable>
        </LinkAnchor>
        :
        <Span>
          {contentRender()}
        </Span>
      }
    </TagWrapper>
  );
};

export default Tag;
