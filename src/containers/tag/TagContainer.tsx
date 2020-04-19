import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { bindActionCreators, Dispatch } from "redux";
import { withRouter, RouteComponentProps } from 'react-router';

// import organisms
import ArticleSummary from "components/organisms/article/ArticleSummary";

// import commons
import Spinner from "components/commons/Spinner";

// import actions
import { getArticlesByTag } from "actions/articleAction";

// import utils
import * as breakPoints from "utils/breakPoints";
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

// import methods
import { getUrlId, decodeToString } from "methods/utilsMethods";

// import models
import { AppState } from "models/index";
import * as articleModel from "models/articleModel";

interface StateProps {
  articlesByTag: articleModel.Article[];
  isLoading: boolean;
}

interface DispatchProps {
  getArticlesByTag: (tagId: string) => void;
}

type DefaultProps = StateProps & DispatchProps & RouteComponentProps;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h3`
  margin-bottom: 8px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.04em;
  word-break: break-all;
  -webkit-font-feature-settings: "palt" 1;
  font-feature-settings: "palt" 1;
  font-size: ${fontSize.H3};
  color: ${colors.BLACK};
  width: ${breakPoints.isSmartPhone() ? '100%' : '900px'};
  margin: 10px auto;
  margin-top: 25px;
  margin-left: ${breakPoints.isSmartPhone() ? '10px' : 'auto'}; 
`;

const ArticlesWrapper = styled.ul`
  & > div {
    width: ${breakPoints.isSmartPhone() ? '85%' : '85%'}; 
  }
`;

const TagContainer: FC<DefaultProps> = ({
  articlesByTag,
  isLoading,
  getArticlesByTag
}) => {
  // 下記,遷移しない問題への対応
  const [currentUrlPath, setCurrentUrlPath] = useState<string>(getUrlId());

  useEffect(() => {
    getArticlesByTag(decodeToString(getUrlId()));
  }, []);

  if(currentUrlPath !== getUrlId()) {
    getArticlesByTag(decodeToString(getUrlId()));
    setCurrentUrlPath(getUrlId());
  }

  const articlesCount: number = articlesByTag ? articlesByTag.length : 0;

  return (
    <>
      {isLoading ? (
        <Spinner
          top={breakPoints.isSmartPhone() ? "50%" : "25%"}
          left={"50%"}
        />
      ) : (
          <Wrapper>
            <PageTitle>
              {decodeToString(getUrlId())}の記事({String(articlesCount)})
            </PageTitle>
            <ArticlesWrapper>
              {articlesByTag && articlesByTag.map(article => {
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
  articlesByTag: state.article.articlesByTag,
  isLoading: state.article.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getArticlesByTag: (tagId: string) => getArticlesByTag.start(tagId)
    },
    dispatch
  );

export default withRouter<any, any>(connect(
  mapStateToProps,
  mapDispatchToProps
)(TagContainer));
