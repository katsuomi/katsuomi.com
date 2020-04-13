import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { bindActionCreators, Dispatch } from "redux";
import { Waypoint } from 'react-waypoint';

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

// import models
import { AppState } from "models/index";
import * as articleModel from "models/articleModel";

interface StateProps {
  latestArticles: articleModel.Article[];
  articlesByGoodCount: articleModel.Article[];
  isLoading: boolean;
}

interface DispatchProps {
  getLatestArticles: (date?: Date) => void;
  getArticlesByGoodCount: () => void;
}

type DefaultProps = StateProps & DispatchProps;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScrollWrapper = styled.div`
  height: 1100px;
  overflow: scroll;
`;

const ArticlesWrapper = styled.div`
  & > div {
    width: ${breakPoints.isSmartPhone() ? '85%' : '85%'}; 
  }
`;

// 初期表示でway-pointが実行されないように、少し高さを出す
const WayPointWrapper = styled.div`
  display: block;
  height: 2px;
`;

const SpinnerWrapper = styled.div`
  & > div {
    margin-top: -30px;
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
  const [isPagingLoading, setIsPagingLoading] = useState<boolean>(false);
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

  const getMoreArticles = async () => {
    if(currentTitle === 'latestArticles') {
      if(latestArticles[latestArticles.length - 1] === undefined) {
        return;
      }
      setIsPagingLoading(true);
      const lastArticleDate = latestArticles[latestArticles.length - 1].date;
      await getLatestArticles(lastArticleDate);
      await setIsPagingLoading(false);
    } else if(currentTitle === 'articlesByGoodCount') {
      return;
    }
  };

  let articles = latestArticles;
  if(currentTitle === 'articlesByGoodCount') {
    articles = articlesByGoodCount;
  }

  return (
    <>
      {isLoading ? (
        !breakPoints.isSmartPhone() && <Spinner
          top={"55%"}
          left={"50%"}
        />
      ) : (
          <Wrapper>
            <Selector options={selectorOptions} isTitle={true} width={230} onChange={handleOnChangeSelector} />
            <ScrollWrapper>
              <ArticlesWrapper>
                {articles?.map(article => {
                  return (
                    <ArticleSummary article={article} key={article.uid} />
                  );
                })}
              </ArticlesWrapper>
              {isPagingLoading && <SpinnerWrapper><Spinner display="block" position='relative' /></SpinnerWrapper>}
              <WayPointWrapper>
                <Waypoint onEnter={() => getMoreArticles()} />
              </WayPointWrapper>
            </ScrollWrapper>
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
      getLatestArticles: (date?: Date) => getLatestArticles.start(date),
      getArticlesByGoodCount: () => getArticlesByGoodCount.start()
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeCenterContainer);
