import React, { FC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

//import utils
import pages from "utils/pages";

// import components
import Slide from "slick/Slide";

const Home: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{pages.home.title}</title>
    </Helmet>
    <Slide />
  </>
);

export default Home;
