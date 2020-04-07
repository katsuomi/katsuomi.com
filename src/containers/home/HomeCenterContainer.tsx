import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { bindActionCreators, Dispatch } from "redux";

// import organisms
import ArticleSummary from "components/organisms/article/ArticleSummary";

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
  margin-left: ${breakPoints.isSmartPhone() ? '10px' : '0px'}; 
`;

const ArticlesWrapper = styled.div`
  & > div {
    width: ${breakPoints.isSmartPhone() ? '85%' : '85%'}; 
  }
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
          top={breakPoints.isSmartPhone() ? "85%" : "55%"}
          left={"50%"}
        />
      ) : (
          <Wrapper>
            <Title>最新の記事</Title>
            <ArticlesWrapper>
              {latestArticles?.map(article => {
                return (
                  <ArticleSummary article={article} key={article.uid} />
                );
              })}
            </ArticlesWrapper>
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
