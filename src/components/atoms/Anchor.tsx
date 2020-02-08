/**
 *
 * Anchor
 *
 */

import React, { ReactElement } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//import utils
import * as colors from "utils/color";

interface DefaultProps {
  src: string;
  children?: string | ReactElement<any>;
}

const AnchorWrapper = styled.span`
  > a {
    color: ${colors.BLUE};
    text-decoration: none;
    cursor: pointer;
  }
  > a:hover {
    color: ${colors.HOVER_WHITE};
    text-decoration: solid;
  }
`;

const Anchor = (props: DefaultProps) => {
  const { src, children } = props;
  return (
    <AnchorWrapper>
      <Link to={src}>{children}</Link>
    </AnchorWrapper>
  );
};

export default Anchor;
