import React, { FC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

// import utils
import pages from "utils/pages";

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1``;

const Awards: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{pages.awards.title}</title>
    </Helmet>

    <Wrapper>
      <Title>KATSUOMI AOKI</Title>
    </Wrapper>
  </>
);

export default Awards;
