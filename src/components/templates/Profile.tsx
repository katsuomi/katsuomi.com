import React, { FC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

// import utils
import pages from "utils/pages";
import * as fontSize from "utils/fontSize";
import * as colors from "utils/color";
import * as breakPoints from "utils/breakPoints";

// import organisms
import ProfileLeft from "components/organisms/profile/ProfileLeft";
import ProfileRight from "components/organisms/profile/ProfileRight";
import ProfileBottom from "components/organisms/profile/ProfileBottom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  margin-top: 80px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: ${breakPoints.isSmartPhone() ? "column" : "row"};
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: ${fontSize.H2};
  color: ${colors.CAPTION};
`;

const Profile: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{pages.profile.title}</title>
    </Helmet>

    <Wrapper>
      <Title>プロフィール</Title>
      <ProfileWrapper>
        <ProfileLeft />
        <ProfileRight />
      </ProfileWrapper>
      <ProfileBottom />
    </Wrapper>
  </>
);

export default Profile;
