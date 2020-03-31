import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { bindActionCreators, Dispatch } from "redux";
import Image from "react-image-resizer";

// import atoms
import LinkAnchor from "components/atoms/LinkAnchor";

// import molecules
import MarkDownContent from "components/molecules/MarkDownContent";
import Tag from "components/molecules/Tag";

// import commons
import Spinner from "components/commons/Spinner";

// import actions
import { getArticlesByTag } from "actions/articleAction";

// import utils
import * as breakPoints from "utils/breakPoints";
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

// import methods
import { getUrlId } from "methods/utilsMethods";
import { dateToString } from "methods/articleMethods";

// import models
import { AppState } from "models/index";
import * as articleModel from "models/articleModel";

interface StateProps {
  articlesByTag?: articleModel.Article[];
  isLoading?: boolean;
}

interface DispatchProps {
  getArticlesByTag: (tagId: string) => void;
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

const ImageWrapper = styled.div`
  & > div {
    margin: 0 auto;
  }
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: ${fontSize.H3};
`;

const Date = styled.p`
  font-size: ${fontSize.CAPTION};
  color: ${colors.DARK_GRAY};
  text-align: right;
`;

const ContentWrapper = styled.div`
  margin-top: 20px;
`;

const TagContainer: FC<DefaultProps> = ({
  articlesByTag,
  isLoading,
  getArticlesByTag
}) => {
  useEffect(() => {
    getArticlesByTag(getUrlId());
  }, [getArticlesByTag]);

  console.log({ articlesByTag });
  return (
    <>
      {isLoading ? (
        <Spinner
          top={breakPoints.isSmartPhone() ? "10%" : "25%"}
          left={"50%"}
        />
      ) : (
        <>aaaa</>
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

export default connect(mapStateToProps, mapDispatchToProps)(TagContainer);
