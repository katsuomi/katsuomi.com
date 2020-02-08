import React, { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";

// import css
import "./slick.css";

// import atoms
import Anchor from "components/atoms/Anchor";

// import utils
import * as breakPoints from "utils/breakPoints";

const Wrapper = styled.div``;

const Img = styled.img`
  width: 98%;
  height: ${breakPoints.hasWidth800() ? "30vw" : "40vw"};
`;

const awards_posts = [
  {
    id: 1,
    image_path:
      "https://qiita-user-profile-images.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F270696%2Fprofile-images%2F1562648000?ixlib=rb-1.2.2&auto=compress%2Cformat&lossless=0&w=300&s=49aceb96c3fcc9aa96ed473007abd8f0",
    title: "タイトルです"
  },
  {
    id: 2,
    image_path:
      "https://qiita-user-profile-images.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F270696%2Fprofile-images%2F1562648000?ixlib=rb-1.2.2&auto=compress%2Cformat&lossless=0&w=300&s=49aceb96c3fcc9aa96ed473007abd8f0",
    title: "タイトルです"
  },
  {
    id: 3,
    image_path:
      "https://qiita-user-profile-images.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F270696%2Fprofile-images%2F1562648000?ixlib=rb-1.2.2&auto=compress%2Cformat&lossless=0&w=300&s=49aceb96c3fcc9aa96ed473007abd8f0",
    title: "タイトルです"
  }
];

const Slide: FC = () => {
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
      <Slider {...settings}>
        {awards_posts.map((post, i) => (
          <Wrapper key={i}>
            <Anchor src={"/posts/" + post.id}>
              <Img src={post.image_path} alt={post.title} />
            </Anchor>
          </Wrapper>
        ))}
      </Slider>
    </>
  );
};

export default Slide;
