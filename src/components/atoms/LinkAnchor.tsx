/**
 *
 * LinkAnchor
 *
 */

import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//import utils
import * as colors from "utils/color";

interface DefaultProps {
  src: string;
  children?: string | ReactElement<any>;
  isHoverWhite?: boolean;
}

interface AnchorStyleProps {
  isHoverWhite: boolean;
}

const AnchorWrapper = styled.span<AnchorStyleProps>`
  > a {
    color: ${colors.BLUE};
    text-decoration: none;
    cursor: pointer;
  }
  > a:hover {
    color: ${props => (props.isHoverWhite ? colors.HOVER_WHITE : undefined)};
    text-decoration: solid;
  }
`;

const LinkAnchor: FC<DefaultProps> = ({ src, children, isHoverWhite }) => {
  return (
    <AnchorWrapper isHoverWhite={isHoverWhite ? isHoverWhite : false}>
      <Link to={src}>{children}</Link>
    </AnchorWrapper>
  );
};

export default LinkAnchor;
