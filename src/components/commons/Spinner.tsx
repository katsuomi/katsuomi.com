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
  right?: string;
  position?: "abslute" | "relative";
  display?: 'block';
}

export interface SpinnerStyleProps {
  top?: string;
  left?: string;
  right?: string;
  position?: "abslute" | "relative";
  display?: 'block';
}

const SegmentWrapper = styled.div<SpinnerStyleProps>`
  width: ${props => (props.display === 'block' ? '100%' : undefined)};
  position: ${props => (props.position ? props.position : "absolute")};
  top: ${props => (props.top ? props.top : undefined)};
  left: ${props => (props.left ? props.left : undefined)};
  right: ${props => (props.right ? props.right : undefined)};
  margin-right: ${props => (props.right || props.display === 'block' ? undefined : "-50%")};
  transform: ${props => (props.display === 'block' ? undefined : 'translate(-50%, -50%)')};
  > * > * {
    justify-content: center;
  }
`;

const LoadWrapper = styled.p`
  color: ${colors.BLACK};
`;

const Spinner: FC<SpinnerProps> = ({ top, left, right, position, display }) => (
  <SegmentWrapper
    top={top ? top : ""}
    left={left ? left : ""}
    right={right ? right : ""}
    position={position}
    display={display}
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
