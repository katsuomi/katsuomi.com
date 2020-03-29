import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { bindActionCreators, Dispatch } from "redux";

// import atoms
import LinkAnchor from "components/atoms/LinkAnchor";

// import molecules
import Tag from "components/molecules/Tag";

// import commons
import Spinner from "components/commons/Spinner";

// import actions
import { getTags } from "actions/tagAction";

// import utils
import * as breakPoints from "utils/breakPoints";
import * as colors from "utils/color";
import * as fonSize from "utils/fontSize";

// import methods
import { getArticleCountByTag } from "methods/tagMethods";

// import models
import { AppState } from "models/index";
import * as tagModel from "models/tagModel";

interface StateProps {
  tags?: tagModel.Tag[];
  isLoading?: boolean;
}

interface DispatchProps {
  getTags: () => void;
}

type DefaultProps = StateProps & DispatchProps;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: ${fonSize.H4};
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  -webkit-box-align: center;
  align-items: center;
`;

const HomeRightContainer: FC<DefaultProps> = ({ tags, isLoading, getTags }) => {
  useEffect(() => {
    getTags();
  }, [getTags]);

  return (
    <>
      {isLoading ? (
        <Spinner
          top={breakPoints.isSmartPhone() ? "30%" : "55%"}
          right={"10%"}
        />
      ) : (
        <Wrapper>
          <Title>タグ一覧</Title>
          <TagWrapper>
            {tags?.map(tag => {
              return <Tag key={tag.id} text={tag.text} isArticleCount={true} />;
            })}
          </TagWrapper>
        </Wrapper>
      )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  tags: state.tag.tags,
  isLoading: state.tag.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getTags: () => getTags.start()
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeRightContainer);
