import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { bindActionCreators, Dispatch } from "redux";

// import organisms
import AdminLogin from "components/organisms/admin/AdminLogin";
import ArticleSummary from 'components/organisms/article/ArticleSummary';

// import commons
import Spinner from "components/commons/Spinner";

// import actions
import { getArticles } from "actions/articleAction";

// import methods
import { isAdmin } from "methods/adminLoginMethods";

// import utils
import * as breakPoints from "utils/breakPoints";
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

// import models
import { AppState } from "models/index";
import * as articleModel from "models/articleModel";
import * as adminLoginModel from "models/adminLoginModel";

interface StateProps {
  user?: adminLoginModel.User;
  articles?: articleModel.Article[];
  isLoading?: boolean;
}

interface DispatchProps {
  getArticles: () => void;
}

type DefaultProps = StateProps & DispatchProps;

const PageTitle = styled.h3`
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.04em;
  word-break: break-all;
  -webkit-font-feature-settings: "palt" 1;
  font-feature-settings: "palt" 1;
  font-size: ${fontSize.H3};
  color: ${colors.BLACK};
  width: 1000px;
  margin: 30px auto;  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArticlesWrapper = styled.ul`
`;

const AdminArticleContainer: FC<DefaultProps> = ({
  user,
  articles,
  isLoading,
  getArticles
}) => {
  useEffect(() => {
    getArticles();
  }, [getArticles]);

  if(user === undefined || (user && !isAdmin(user))) {
    return <AdminLogin />;
  }

  return (
    <>
      {isLoading ? (
        <Spinner
          top={breakPoints.isSmartPhone() ? "30%" : "55%"}
          left={"50%"}
        />
      ) : (
          <Wrapper>
            <PageTitle>すべての記事</PageTitle>
            <ArticlesWrapper>
              {articles?.map(article => {
                return (
                  <ArticleSummary article={article} key={article.uid} isEdit={true} />
                );
              })}
            </ArticlesWrapper>
          </Wrapper>
        )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  user: state.adminLogin.user,
  articles: state.article.articles,
  isLoading: state.article.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getArticles: () => getArticles.start()
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminArticleContainer);
