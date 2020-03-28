/**
 *
 * Anchor
 *
 */

import React, { FC, ReactElement } from "react";
import styled from "styled-components";

//import utils
import * as colors from "utils/color";

interface DefaultProps {
  href: string;
  children?: string | ReactElement<any>;
}

interface AnchorProps {
  href?: string;
  target?: string;
}

const A = styled.a.attrs(
  ({ href }): AnchorProps => ({
    href: href,
    target: "_blank"
  })
)`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const Anchor: FC<DefaultProps> = ({ href, children }) => {
  return <A href={href}>{children}</A>;
};

export default Anchor;
