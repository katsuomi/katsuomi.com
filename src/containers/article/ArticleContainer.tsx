import React, { FC, useEffect, useState, FormEvent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { bindActionCreators, Dispatch } from "redux";
import Image from "react-image-resizer";
import { withRouter, RouteComponentProps } from 'react-router';

// import molecules
import MarkDownContent from "components/molecules/MarkDownContent";
import Tag from "components/molecules/Tag";

// import oraganisms
import ArticleSummary from "components/organisms/article/ArticleSummary";

// import commons
import Spinner from "components/commons/Spinner";

// import actions
import { getArticle, getPrevArticle, getNextArticle, changeArticleGoodCount } from "actions/articleAction";

// import utils
import * as breakPoints from "utils/breakPoints";
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

// import methods
import { getUrlId, getCurrentDate } from "methods/utilsMethods";
import { dateToString } from "methods/articleMethods";

// import models
import { AppState } from "models/index";
import * as articleModel from "models/articleModel";

interface StateProps {
  article: articleModel.Article;
  prevArticle: articleModel.Article;
  nextArticle: articleModel.Article;
  isLoading: boolean;
}

interface DispatchProps {
  getArticle: (id: string) => void;
  getArticleReset: () => void;
  getPrevArticle: (payload: Date) => void;
  getNextArticle: (payload: Date) => void;
  getPrevArticleReset: () => void;
  getNextArticleReset: () => void;
  changeArticleGoodCount: (payload: articleModel.ArticleGoodCountPayLoad) => void;
}

type DefaultProps = StateProps & DispatchProps;

const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

const LeftSide = styled.div`
  width: ${breakPoints.isSmartPhone() ? '0%' : '15%'};
`;

const CenterSide = styled.div`
  width: ${breakPoints.isSmartPhone() ? '90%' : '70%'};
  word-break: break-all;
  max-width: 900px;
  margin: 0px auto;
  padding: 20px 10px;
`;

const RightSide = styled.div`
  width: ${breakPoints.isSmartPhone() ? '0%' : '15%'};
`;

const ImageWrapper = styled.div`
  & > div {
    margin: 0 auto;
    text-align: center;
  }
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: ${fontSize.H3};
`;

const I = styled.i`
  font-size: ${fontSize.H2};
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const Good = styled.p`
  margin-right: auto;
`;

const GoodFix = styled.button`
  position: fixed;
  right: ${breakPoints.isSmartPhone() ? '3%' : '22%'};
  bottom: 1%;
  background-color: ${colors.BG_GRAY};
  width: 70px;
  height: 70px;
  margin: auto;
  padding: initial;
  border-radius: 50%;
  font-size: ${fontSize.H3};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const Date = styled.p`
  font-size: ${fontSize.CAPTION};
  color: ${colors.DARK_GRAY};
  text-align: right;
`;

const ContentWrapper = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid ${colors.DARK_BORDER_GRAY};
  padding-bottom: ${breakPoints.isSmartPhone() ? '30px' : '80px'};
  & > span > img {
    width: 80%;
  }
`;

const P = styled.p`
  margin-top: 10px;
  font-size: ${fontSize.BODY};
  font-weight: bold;
`;

const NextPrevWrapper = styled.div`
  & > div {
    width: ${breakPoints.isSmartPhone() ? '93%' : '100%'};
  }
`;

const ArticleContainer: FC<DefaultProps> = ({
  article,
  prevArticle,
  nextArticle,
  isLoading,
  getArticle,
  getArticleReset,
  getPrevArticle,
  getNextArticle,
  getPrevArticleReset,
  getNextArticleReset,
  changeArticleGoodCount
}) => {
  const [currentCount, setCurrentCount] = useState<number>(-1);
  const [isDone, setIsDone] = useState<boolean>(false);
  // 下記,遷移しない問題への対応
  const [currentUrlPath, setCurrentUrlPath] = useState<string>(getUrlId());
  const [defaultDate, setDefaultDate] = useState<Date>(getCurrentDate());

  useEffect(() => {
    getArticle(getUrlId());
    return () => {
      window.removeEventListener('mousemove', () => { });
      getPrevArticleReset();
      getNextArticleReset();
      getArticleReset();
    };
  }, []);

  if(currentUrlPath !== getUrlId()) {
    getArticleReset();
    getPrevArticleReset();
    getNextArticleReset();
    getArticle(getUrlId());
    setCurrentUrlPath(getUrlId());
    setIsDone(false);
  }

  if(!isDone && dateToString(article.date) !== dateToString(getCurrentDate()) && dateToString(article.date) !== dateToString(defaultDate)) {
    getNextArticle(article.date);
    getPrevArticle(article.date);
    setIsDone(true);
    setDefaultDate(article.date);
  }

  const isDoneGoodCount = localStorage.getItem(`isDoneGoodCount/${article.uid}`) === 'true';
  let goodCountClassNameForFontAweSome = 'far fa-thumbs-up';
  if(isDoneGoodCount) {
    goodCountClassNameForFontAweSome = 'fas fa-thumbs-up';
  }
  const handleOnSubmitGoodCount = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      articleId: article && article.uid ? article.uid : '',
      isDone: isDoneGoodCount,
    };
    await changeArticleGoodCount(payload);

    if(isDoneGoodCount) {
      localStorage.removeItem(`isDoneGoodCount/${article.uid}`);
      setCurrentCount(currentCount - 1);
    } else {
      localStorage.setItem(`isDoneGoodCount/${article.uid}`, 'true');
      setCurrentCount(currentCount + 1);
    }
  };

  if(article && article.goodCount !== undefined && currentCount === -1) {
    setCurrentCount(article.goodCount);
  }

  return (
    <>
      {isLoading ? (
        <Spinner
          top={breakPoints.isSmartPhone() ? "30%" : "25%"}
          left={"50%"}
        />
      ) : (
          article && (
            <Wrapper>
              <LeftSide></LeftSide>
              <CenterSide>
                <ImageWrapper>
                  <Image
                    src={article.thumbnailImagePath}
                    height={breakPoints.isSmartPhone() ? 100 : 300}
                    width={breakPoints.isSmartPhone() ? 300 : 700}
                  />
                </ImageWrapper>
                <Title>{article.title}</Title>
                <Good>{currentCount}<I className={goodCountClassNameForFontAweSome} onClick={(e) => handleOnSubmitGoodCount(e)}></I></Good>
                <Date>{dateToString(article.date)}</Date>
                {article.tagIds.map(tag => (
                  <Tag key={tag} text={tag} isArticleCount={false} />
                ))}
                <ContentWrapper>
                  <MarkDownContent content={article.content} />
                </ContentWrapper>
                <NextPrevWrapper>
                  {nextArticle.uid && <>
                    <P>次の記事はこちら</P>
                    <ArticleSummary article={nextArticle} />
                  </>}
                  {prevArticle.uid && <>
                    <P>前の記事はこちら</P>
                    <ArticleSummary article={prevArticle} />
                  </>}
                </NextPrevWrapper>
                <GoodFix onClick={(e) => handleOnSubmitGoodCount(e)}>{currentCount}<I className={goodCountClassNameForFontAweSome}></I></GoodFix>
              </CenterSide>
              <RightSide></RightSide>
            </Wrapper>
          )
        )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  article: state.article.article,
  prevArticle: state.article.prevArticle,
  nextArticle: state.article.nextArticle,
  isLoading: state.article.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getArticle: (id: string) => getArticle.start(id),
      getArticleReset: () => getArticle.failure(),
      getPrevArticle: (payload: Date) => getPrevArticle.start(payload),
      getNextArticle: (payload: Date) => getNextArticle.start(payload),
      getPrevArticleReset: () => getPrevArticle.failure(),
      getNextArticleReset: () => getNextArticle.failure(),
      changeArticleGoodCount: (payload: articleModel.ArticleGoodCountPayLoad) => changeArticleGoodCount.start(payload),
    },
    dispatch
  );

export default withRouter<any, any>(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleContainer));
