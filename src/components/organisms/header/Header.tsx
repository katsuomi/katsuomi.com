import React, { FC } from "react";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from 'react-router';

// import atoms
import LinkAnchor from "components/atoms/LinkAnchor";

//import containers
import FlashMessagesContainer from "containers/flashMessage/FlashMessagesContainer";
import HeaderTitleContainer from "containers/header/HeaderTitleContainer";

// import utils
import * as colors from "utils/color";
import * as breakPoints from "utils/breakPoints";
import * as fontSize from "utils/fontSize";

// import methods
import { encodeToString, decodeToString, getUrlId } from "methods/utilsMethods";

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
    font-size: ${breakPoints.isSmartPhone() ? fontSize.BODY : fontSize.MINI};
    padding: 0 ${breakPoints.isSmartPhone() ? "5px" : "20px"};
  }
`;

const Span = styled.span<{ keyword: string; }>`
  color: ${props =>
    props.keyword === decodeToString(getUrlId()) ? colors.WHITE : undefined};
`;

const Header: FC<RouteComponentProps> = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderTitle>
          <HeaderTitleContainer />
        </HeaderTitle>
        <HeaderContents>
          <LinkAnchor isHoverWhite={true} src={`/tags/${encodeToString('News')}`}>
            <Span keyword={'News'}>
              News
            </Span>
          </LinkAnchor>
          <LinkAnchor isHoverWhite={true} src={`/tags/${encodeToString('Awards')}`}>
            <Span keyword={'Awards'}>
              Awards
            </Span>
          </LinkAnchor>
          <LinkAnchor isHoverWhite={true} src={`/tags/${encodeToString('Products')}`}>
            <Span keyword={'Products'}>
              Products
            </Span>
          </LinkAnchor>
          <LinkAnchor src="/profile" isHoverWhite={true}>
            <Span keyword={'profile'}>
              Profile
            </Span>
          </LinkAnchor>
          <LinkAnchor src="/contact" isHoverWhite={true}>
            <Span keyword={'contact'}>
              Contact
            </Span>
          </LinkAnchor>
        </HeaderContents>
      </HeaderWrapper>
      <FlashMessagesContainer />
    </>
  );
};

export default withRouter<any, any>(Header);;
