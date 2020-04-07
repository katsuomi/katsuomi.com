import React, { FC } from "react";
import styled from "styled-components";

// import atoms
import Button from "components/atoms/Button";
import LinkAnchor from "components/atoms/LinkAnchor";

// import utils
import * as fontSize from "utils/fontSize";
import * as colors from "utils/color";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  text-align: center;
`;

const Txt = styled.p`
  font-size: ${fontSize.H4};
  font-weight: bold;
`;

const NotFound: FC = () => (
  <Wrapper>
    <Txt>This page is not Found.</Txt>
    <LinkAnchor src="/" isHoverWhite={true}>
      <Button
        isDisabled={false}
        borderColor={colors.BRIGHT_BLUE}
        backgroundColor={colors.BRIGHT_BLUE}
        color={colors.WHITE}
        padding={["5px", "5px", "120px", "120px"]}
      >
        go Home
        </Button>
    </LinkAnchor>
  </Wrapper>
);

export default NotFound;
