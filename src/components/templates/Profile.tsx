import React, { FC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

// import utils
import pages from "utils/pages";

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1``;

const Profile: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{pages.profile.title}</title>
    </Helmet>

    <Wrapper>
      <Title>KATSUOMI AOKI</Title>
    </Wrapper>
  </>
);

export default Profile;
