import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { bindActionCreators, Dispatch } from "redux";
import Image from "react-image-resizer";

// import atoms
import LinkAnchor from "components/atoms/LinkAnchor";
import Button from "components/atoms/Button";

// import molecules
import Tag from "components/molecules/Tag";

// import commons
import Spinner from "components/commons/Spinner";

// import actions
import { getArticles } from "actions/articleAction";

// import methods
import { dateToString } from "methods/articleMethods";

// import utils
import * as breakPoints from "utils/breakPoints";
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

// import models
import { AppState } from "models/index";
import * as articleModel from "models/articleModel";

interface StateProps {
  articles?: articleModel.Article[];
  isLoading?: boolean;
}

interface DispatchProps {
  getArticles: () => void;
}

type DefaultProps = StateProps & DispatchProps;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1300px;
  margin: 20px auto;
`;

const Section = styled.div`
  margin-top: 30px;
`;

const Center = styled.div`
  text-align: center;
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
`;

const AdminMenu: FC<DefaultProps> = ({
  articles,
  isLoading,
  getArticles
}) => {
  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <>
      {isLoading ? (
        <Spinner
          top={breakPoints.isSmartPhone() ? "30%" : "55%"}
          left={"50%"}
        />
      ) : (
          <Wrapper>
            <Section>
              <Center>
                <LinkAnchor src="/admin/create_article" isHoverWhite={true}>
                  <Button
                    isDisabled={false}
                    borderColor={colors.BRIGHT_BLUE}
                    backgroundColor={colors.BRIGHT_BLUE}
                    color={colors.WHITE}
                    padding={["5px", "5px", "35px", "35px"]}
                  >
                    記事を書く
                  </Button>
                </LinkAnchor>
              </Center>
            </Section>
            <Section>
              <Center>
                <LinkAnchor src="/admin/articles" isHoverWhite={true}>
                  <Button
                    isDisabled={false}
                    borderColor={colors.BRIGHT_BLUE}
                    backgroundColor={colors.BRIGHT_BLUE}
                    color={colors.WHITE}
                    padding={["5px", "5px", "35px", "35px"]}
                  >
                    記事一覧へ
                  </Button>
                </LinkAnchor>
              </Center>
            </Section>
          </Wrapper>
        )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
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
)(AdminMenu);
