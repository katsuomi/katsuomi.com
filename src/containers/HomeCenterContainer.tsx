import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { bindActionCreators, Dispatch } from "redux";

// import atoms
import Anchor from "components/atoms/LinkAnchor";

// import molecules
import MarkDownContent from "components/molecules/MarkDownContent";
import Tag from "components/molecules/Tag";

// import commons
import Spinner from "components/commons/Spinner";

// import actions
import { getLatestArticles } from "actions/articleAction";

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
`;

const Img = styled.img`
  width: 180px;
  height: 180px;
  margin: 20px;
  margin-left: 42px;
  border-radius: 10px;
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
`;

const ContentWrapper = styled.div`
  height: 150px;
  overflow: scroll;
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
          {latestArticles?.map(article => {
            return (
              <ArticleWrapper key={article.uid}>
                <UpperPart>
                  <Left>
                    <Title>{article.title}</Title>
                    <ContentWrapper>
                      <MarkDownContent content={article.content} />
                    </ContentWrapper>
                  </Left>
                  <Right>
                    <Img src={article.thumbnail_image_path} />
                  </Right>
                </UpperPart>
                <LowerPart>
                  {article.tag_ids.map(tag => (
                    <Tag key={tag} text={tag} isArticleCount={false} />
                  ))}
                </LowerPart>
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
