import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { bindActionCreators, Dispatch } from "redux";

// import atoms
import LinkAnchor from "components/atoms/LinkAnchor";

// import molecules
import MarkDownContent from "components/molecules/MarkDownContent";
import Tag from "components/molecules/Tag";

// import commons
import Spinner from "components/commons/Spinner";

// import actions
import { getArticle } from "actions/articleAction";

// import utils
import * as breakPoints from "utils/breakPoints";
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

// import models
import { AppState } from "models/index";
import * as articleModel from "models/articleModel";

interface StateProps {
  article?: articleModel.Article;
  isLoading?: boolean;
}

interface DispatchProps {
  getArticle: (id: string) => void;
}

type DefaultProps = StateProps & DispatchProps;

const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

const LeftSide = styled.div`
  width: 15%;
`;

const CenterSide = styled.div`
  width: 70%;
  word-break: break-all;
  max-width: 900px;
  margin: 0px auto;
  padding: 20px 10px;
`;

const RightSide = styled.div`
  width: 15%;
`;

const P = styled.p`
  text-align: center;
`;

const Img = styled.img`
  width: 360px;
  height: 360px;
  border-radius: 10px;
`;

const ArticleContainer: FC<DefaultProps> = ({
  article,
  isLoading,
  getArticle
}) => {
  useEffect(() => {
    getArticle("KPrwXcb6d7DiKDhL7Sxw");
  }, [getArticle]);

  return (
    <>
      {isLoading ? (
        <Spinner
          top={breakPoints.isSmartPhone() ? "30%" : "55%"}
          left={"50%"}
        />
      ) : (
        article && (
          <Wrapper>
            <LeftSide></LeftSide>
            <CenterSide>
              <P>
                <Img src={article.thumbnail_image_path} />
              </P>
              <MarkDownContent content={article.content} />
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
  isLoading: state.article.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getArticle: (id: string) => getArticle.start(id)
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);
