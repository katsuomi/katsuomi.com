import React, { FC, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { bindActionCreators, Dispatch } from "redux";

// import css
import "./slick.css";

// import atoms
import LinkAnchor from "components/atoms/LinkAnchor";

// import commons
import Spinner from "components/commons/Spinner";

// import actions
import { getSlideShowArticles } from "actions/articleAction";

// import utils
import * as breakPoints from "utils/breakPoints";

// import models
import { AppState } from "models/index";
import * as articleModel from "models/articleModel";

interface StateProps {
  slideShowArticles?: articleModel.Article[];
  isLoading?: boolean;
}

interface DispatchProps {
  getSlideShowArticles: () => void;
}

type DefaultProps = StateProps & DispatchProps;

const Wrapper = styled.div``;

const Img = styled.img`
  width: 98%;
  height: ${breakPoints.hasWidth800() ? "30vw" : "40vw"};
  max-height: 390px;
  object-fit: scale-down;
`;

const SlideContainer: FC<DefaultProps> = ({
  slideShowArticles,
  isLoading,
  getSlideShowArticles
}) => {
  useEffect(() => {
    getSlideShowArticles();
  }, [getSlideShowArticles]);
  const settings = {
    centerMode: true,
    centerPadding: "300px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    responsive: [
      {
        breakpoint: breakPoints.tabletMaxWidth,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "200px"
        }
      },
      {
        breakpoint: breakPoints.tabletMinWidth,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "100px"
        }
      }
    ]
  };

  return (
    <>
      {isLoading ? (
        <Spinner
          top={breakPoints.isSmartPhone() ? "30%" : "25%"}
          left={"50%"}
        />
      ) : (
        <Slider {...settings}>
          {slideShowArticles &&
            slideShowArticles.map(article => (
              <Wrapper key={article.uid}>
                <LinkAnchor src={"/articles/" + article.uid}>
                  <Img src={article.thumbnail_image_path} alt={article.title} />
                </LinkAnchor>
              </Wrapper>
            ))}
        </Slider>
      )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  slideShowArticles: state.article.slideShowArticles,
  isLoading: state.article.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getSlideShowArticles: () => getSlideShowArticles.start()
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SlideContainer);
