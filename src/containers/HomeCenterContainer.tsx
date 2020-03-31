import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { bindActionCreators, Dispatch } from "redux";
import Image from "react-image-resizer";

// import atoms
import LinkAnchor from "components/atoms/LinkAnchor";

// import molecules
import Tag from "components/molecules/Tag";

// import commons
import Spinner from "components/commons/Spinner";

// import actions
import { getLatestArticles } from "actions/articleAction";

// import methods
import { dateToString } from "methods/articleMethods";

// import utils
import * as breakPoints from "utils/breakPoints";
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

// import models
import { AppState } from "models/index";
import * as articleModel from "models/articleModel";

interface StateProps {
  latestArticles?: articleModel.Article[];
  isLoading?: boolean;
}

interface DispatchProps {
  getLatestArticles: () => void;
}

type DefaultProps = StateProps & DispatchProps;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArticleWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fefefe;
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
  height: 200px;
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

const ContentWrapper = styled.div`
  margin-top: 30px;
  height: 150px;
  color: ${colors.SUB_GRAY};
`;

const Date = styled.p`
  font-size: ${fontSize.CAPTION};
  color: ${colors.DARK_GRAY};
  margin-left: auto;
  margin-top: 0px;
`;

const HomeCenterContainer: FC<DefaultProps> = ({
  latestArticles,
  isLoading,
  getLatestArticles
}) => {
  useEffect(() => {
    getLatestArticles();
  }, [getLatestArticles]);
  return (
    <>
      {isLoading ? (
        <Spinner
          top={breakPoints.isSmartPhone() ? "30%" : "55%"}
          left={"50%"}
        />
      ) : (
        <Wrapper>
          <Title>最新の記事</Title>
          {latestArticles?.map(article => {
            return (
              <ArticleWrapper key={article.uid}>
                <LinkAnchor src={`/articles/${article.uid}`}>
                  <Linkable>
                    <UpperPart>
                      <Left>
                        <Title>{article.title}</Title>
                        <ContentWrapper>{article.subTitle} ...</ContentWrapper>
                      </Left>
                      <Right>
                        <Image
                          src={article.thumbnail_image_path}
                          height={180}
                          width={180}
                        />
                      </Right>
                    </UpperPart>
                    <LowerPart>
                      {article.tag_ids.map(tag => (
                        <Tag key={tag} text={tag} isArticleCount={false} />
                      ))}
                      <Date>{dateToString(article.date)}</Date>
                    </LowerPart>
                  </Linkable>
                </LinkAnchor>
              </ArticleWrapper>
            );
          })}
        </Wrapper>
      )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  latestArticles: state.article.latestArticles,
  isLoading: state.article.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getLatestArticles: () => getLatestArticles.start()
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeCenterContainer);
