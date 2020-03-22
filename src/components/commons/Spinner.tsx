/**
 *
 * Spinner
 *
 */

import React, { FC } from "react";
import Loader from "react-loader-spinner";
import { Dimmer, Segment } from "semantic-ui-react";
import styled from "styled-components";

//import utils
import * as colors from "utils/color";

export interface SpinnerProps {
  top?: string;
  left?: string;
  position?: "abslute" | "relative";
}

export interface SpinnerStyleProps {
  top?: string;
  left?: string;
  position?: "abslute" | "relative";
}

const SegmentWrapper = styled.div<SpinnerStyleProps>`
  position: ${props => (props.position ? props.position : "absolute")};
  top: ${props => (props.top ? props.top : "50%")};
  left: ${props => (props.left ? props.left : "50%")};
  margin-right: -50%;
  transform: translate(-50%, -50%);
  > * > * {
    justify-content: center;
  }
`;

const LoadWrapper = styled.p`
  color: ${colors.BLACK};
`;

const Spinner: FC<SpinnerProps> = ({ top, left, position }) => (
  <SegmentWrapper
    top={top ? top : ""}
    left={left ? left : ""}
    position={position}
  >
    <Segment className="spinner">
      <Dimmer active inverted>
        <LoadWrapper>読み込み中...</LoadWrapper>
        <Loader type="TailSpin" color="#00BFFF" height={70} width={70} />
      </Dimmer>
    </Segment>
  </SegmentWrapper>
);

export default Spinner;
