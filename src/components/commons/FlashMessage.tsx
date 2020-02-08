import React, { FC, useEffect } from "react";
import styled from "styled-components";

//import utils
import * as colors from "utils/color";

export interface FlashMessageProps {
  message: string;
  index: number;
  id: number;
  removeFlashMessage: (payload: number) => void;
}

export interface FlashMessageWrapperProps {
  index: number;
}

const FlashMessageWrapper = styled.div<FlashMessageWrapperProps>`
  text-align: center;
  padding: 20px 0px;
  opacity: 0.8;
  margin: 10px 30px;
  background-color: ${colors.RED};
  color: ${colors.WHITE};
  font-weight: bold;
  position: fixed;
  top: ${props =>
    props.index === 0 ? "77px" : `${String(77 + 80 * props.index)}px`};
  left: 15px;
  right: 15px;
  z-index: 20;
  cursor: pointer;
  transition: all 300ms 0s ease;
  &:hover {
    border-color: ${colors.LIGHTER_RED};
    background-color: ${colors.LIGHTER_RED};
  }
`;

const FlashMessage: FC<FlashMessageProps> = ({
  message,
  index,
  id,
  removeFlashMessage
}) => {
  useEffect(() => {
    setTimeout(() => removeFlashMessage(id), 3000);
  }, [id, removeFlashMessage]);
  return message ? (
    <FlashMessageWrapper onClick={() => removeFlashMessage(id)} index={index}>
      {message}
    </FlashMessageWrapper>
  ) : (
    <></>
  );
};

export default FlashMessage;
