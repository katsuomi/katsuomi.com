import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { bindActionCreators, Dispatch } from "redux";

// imoport molecules
import Selector from 'components/molecules/Selector';

// import organisms
import ArticleSummary from "components/organisms/article/ArticleSummary";

// import commons
import Spinner from "components/commons/Spinner";

// import actions
import { getLatestArticles, getArticlesByGoodCount } from "actions/articleAction";

// import utils
import * as breakPoints from "utils/breakPoints";
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

// import models
import { AppState } from "models/index";
import * as articleModel from "models/articleModel";

interface StateProps {
  latestArticles: articleModel.Article[];
  articlesByGoodCount: articleModel.Article[];
  isLoading: boolean;
}

interface DispatchProps {
  getLatestArticles: () => void;
  getArticlesByGoodCount: () => void;
}

type DefaultProps = StateProps & DispatchProps;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArticlesWrapper = styled.div`
  & > div {
    width: ${breakPoints.isSmartPhone() ? '85%' : '85%'}; 
  }
`;

const HomeCenterContainer: FC<DefaultProps> = ({
  latestArticles,
  articlesByGoodCount,
  isLoading,
  getLatestArticles,
  getArticlesByGoodCount
}) => {
  const [currentTitle, setCurrentTitile] = useState<string>('latestArticles');
  useEffect(() => {
    getLatestArticles();
    getArticlesByGoodCount();
  }, []);

  const selectorOptions = [
    { value: 'latestArticles', label: '最新の記事' },
    { value: 'articlesByGoodCount', label: 'いいねの多い記事' },
  ];

  const handleOnChangeSelector = (object: { value: string, label: string; }): void => {
    setCurrentTitile(object.value);
  };

  let articles = latestArticles;
  if(currentTitle === 'articlesByGoodCount') {
    articles = articlesByGoodCount;
  }

  return (
    <>
      {isLoading ? (
        <Spinner
          top={breakPoints.isSmartPhone() ? "85%" : "55%"}
          left={"50%"}
        />
      ) : (
          <Wrapper>
            <Selector options={selectorOptions} isTitle={true} width={230} onChange={handleOnChangeSelector} />
            <ArticlesWrapper>
              {articles?.map(article => {
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
  articlesByGoodCount: state.article.articlesByGoodCount,
  isLoading: state.article.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getLatestArticles: () => getLatestArticles.start(),
      getArticlesByGoodCount: () => getArticlesByGoodCount.start()
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeCenterContainer);
