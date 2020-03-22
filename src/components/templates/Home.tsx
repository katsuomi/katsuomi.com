import React, { FC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

//import utils
import pages from "utils/pages";
import * as breakPoints from "utils/breakPoints";

// import components
import SlideContainer from "slick/SlideContainer";
import HomeLeftSide from "components/organisms/HomeLeftSide";
import HomeCenterSide from "components/organisms/HomeCenterSide";
import HomeRightSide from "components/organisms/HomeRightSide";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
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
