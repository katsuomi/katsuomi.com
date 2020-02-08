import React, { FC } from "react";
import styled from "styled-components";

// import atoms
import Anchor from "components/atoms/Anchor";
// import utils
import * as colors from "utils/color";
import * as breakPoints from "utils/breakPoints";
import * as fontSize from "utils/fontSize";

//import containers
import FlashMessagesContainer from "containers/FlashMessagesContainer";

const HeaderWrapper = styled.div`
  display: ${breakPoints.isSmartPhone() ? "block" : "flex"};
  padding: 10px 0px;
  width: 100%;
  background-color: ${colors.LIGHTER_BLACK};
`;

const HeaderTitle = styled.h1`
  margin-right: auto;
  margin-top: 17px;
  padding-left: 25px;
  font-size: ${fontSize.H3};
  > span > a {
    color: ${colors.WHITE};
  }
  > span > a:hover {
    color: ${colors.BLUE};
  }
`;

const HeaderContents = styled.p`
  ${breakPoints.isSmartPhone() && "text-align: center"};
  > span {
    font-size: ${fontSize.MINI};
    padding: 0 ${breakPoints.isSmartPhone() ? "5px" : "20px"};
  }
`;

const Header: FC = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderTitle>
          <Anchor src="/">AOKI KATSUOMI</Anchor>
        </HeaderTitle>
        <HeaderContents>
          <Anchor src="/news">News</Anchor>
          <Anchor src="/awards">Awards</Anchor>
          <Anchor src="/products">Products</Anchor>
          <Anchor src="/profile">Profile</Anchor>
          <Anchor src="/contact">Contact</Anchor>
        </HeaderContents>
      </HeaderWrapper>
      <FlashMessagesContainer />
    </>
  );
};

export default Header;
