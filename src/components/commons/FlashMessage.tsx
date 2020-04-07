/**
 *
 * FlashMessage
 *
 */

import React, { FC, useEffect } from "react";
import styled from "styled-components";

//import utils
import * as colors from "utils/color";

export interface FlashMessageProps {
  message: string;
  index: number;
  id: string;
  type: string;
  removeFlashMessage: (payload: string) => void;
}

export interface FlashMessageWrapperProps {
  index: number;
  type: string;
}

const FlashMessageWrapper = styled.div<FlashMessageWrapperProps>`
  text-align: center;
  padding: 20px 0px;
  opacity: 0.8;
  margin: 10px 30px;
  ${props => props.type === "failure" && { "background-color": colors.RED }}
  ${props => props.type === "success" && { "background-color": colors.GREEN }}
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
    ${props =>
    props.type === "failure" && { "border-color": colors.LIGHTER_RED }}
    ${props =>
    props.type === "failure" && { "background-color": colors.LIGHTER_RED }}
    ${props =>
    props.type === "success" && { "background-color": colors.LIGHTER_GREEN }}
    ${props =>
    props.type === "success" && { "background-color": colors.LIGHTER_GREEN }}
  }
`;

const FlashMessage: FC<FlashMessageProps> = ({
  message,
  index,
  id,
  type,
  removeFlashMessage
}) => {
  useEffect(() => {
    setTimeout(() => removeFlashMessage(id), 3000);
  }, [id, removeFlashMessage]);
  if(!message) {
    return null;
  }
  return (
    <FlashMessageWrapper
      onClick={() => removeFlashMessage(id)}
      index={index}
      type={type}
    >
      {message}
    </FlashMessageWrapper>
  );
};

export default FlashMessage;
