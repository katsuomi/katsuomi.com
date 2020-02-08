import React, { FC } from "react";
import Loader from "react-loader-spinner";
import { Dimmer, Segment } from "semantic-ui-react";
import styled from "styled-components";

export interface SpinnerProps {
  top: string;
}

export interface FlashMessageWrapperProps {
  index: number;
}

const SegmentWrapper = styled.div<{ top: string }>`
  position: absolute;
  top: ${props => (props.top ? props.top : "50%")};
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%) }
  > * > * {
    justify-content: center;
  }
`;

const LoadWrapper = styled.p``;

const Spinner: FC<SpinnerProps> = ({ top }) => (
  <SegmentWrapper top={top}>
    <Segment className="spinner">
      <Dimmer active inverted>
        <LoadWrapper>読み込み中...</LoadWrapper>
        <Loader type="TailSpin" color="#00BFFF" height={70} width={70} />
      </Dimmer>
    </Segment>
  </SegmentWrapper>
);

export default Spinner;
