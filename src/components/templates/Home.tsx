import React, { FC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

//import utils
import pages from "utils/pages";
import * as breakPoints from "utils/breakPoints";

// import components
import SlideContainer from "containers/slick/SlideContainer";
import HomeLeftSide from "components/organisms/home/HomeLeftSide";
import HomeCenterSide from "components/organisms/home/HomeCenterSide";
import HomeRightSide from "components/organisms/home/HomeRightSide";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1600px;
  margin: 0 auto;
`;

const Home: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{pages.home.title}</title>
    </Helmet>
    <SlideContainer />
    <Wrapper>
      {!breakPoints.isSmartPhone() && <HomeLeftSide />}
      <HomeCenterSide />
      {!breakPoints.isSmartPhone() && <HomeRightSide />}
    </Wrapper>
  </>
);

export default Home;
