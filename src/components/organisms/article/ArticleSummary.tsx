import React, { FC } from "react";
import styled from "styled-components";
import _ from "lodash";
import Image from "react-image-resizer";

// import atoms
import LinkAnchor from "components/atoms/LinkAnchor";

// import molecules
import Tag from "components/molecules/Tag";

// import methods
import { dateToString } from "methods/articleMethods";

// import utils
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

// import models
import * as articleModel from "models/articleModel";

interface DefaultProps {
  article?: articleModel.Article;
  isEdit?: boolean;
}

const ArticleWrapper = styled.div`
  width: 100%;
  height: 275px;
  background-color: #${colors.WHITE};
  margin: 20px auto;
  max-width: 800px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${colors.BORDER_LIGHT_DARK};
  padding: 2px 10px;
  &:hover {
    background-color: ${colors.HOVER};
  }
`;

const Linkable = styled.div`
  height: 100%;
`;

const UpperPart = styled.div`
  display: flex;
  height: 202px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LowerPart = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Left = styled.div`
  width: 70%;
`;

const Right = styled.div`
  width: 30%;
  & > div {
    margin: 20px auto;
    margin-left: 45px;
  }
  & > div > img {
    border-radius: 10px;
  }
`;

const Title = styled.h3`
  margin-bottom: 8px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.04em;
  word-break: break-all;
  -webkit-font-feature-settings: "palt" 1;
  font-feature-settings: "palt" 1;
  font-size: ${fontSize.H3};
  color: ${colors.BLACK};
`;

const TagWrapper = styled.div`
`;

const ContentWrapper = styled.div`
  margin-top: 30px;
  height: 150px;
  color: ${colors.SUB_GRAY};
`;

const I = styled.i`
  font-size: ${fontSize.H2};
  margin-left: 10px;
`;

const Good = styled.p`
  margin-right: auto;
  margin-top: -5px;
`;

const Date = styled.p`
  font-size: ${fontSize.CAPTION};
  color: ${colors.DARK_GRAY};
  margin-left: auto;
  margin-top: 0px;
`;

const ArticleSummary: FC<DefaultProps> = ({ article, isEdit }) => {
  if(!article) return null;

  let path = `/articles/${article.uid}`;
  if(isEdit) {
    path = `/articles/${article.uid}/edit`;
  }

  return (
    <ArticleWrapper key={article.uid}>
      <LinkAnchor src={path}>
        <Linkable>
          <UpperPart>
            <Left>
              <Title>{article.title}</Title>
              <TagWrapper>
                {article.tagIds.map(tag => (
                  <Tag key={tag} text={tag} isArticleCount={false} />
                ))}
              </TagWrapper>
              <ContentWrapper>{article.subTitle.slice(0, 70)} ...</ContentWrapper>
            </Left>
            <Right>
              <Image
                src={article.thumbnailImagePath}
                height={180}
                width={180}
              />
            </Right>
          </UpperPart>
          <LowerPart>
            <Good>{article.goodCount}<I className="far fa-thumbs-up"></I></Good>
            <Date>{dateToString(article.date)}</Date>
          </LowerPart>
        </Linkable>
      </LinkAnchor>
    </ArticleWrapper>
  );
};

export default ArticleSummary;
