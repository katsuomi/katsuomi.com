import React, { FC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

//import utils
import pages from "utils/pages";

// import components
import SlideContainer from "slick/SlideContainer";

const Home: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{pages.home.title}</title>
    </Helmet>
    <SlideContainer />
  </>
);

export default Home;
