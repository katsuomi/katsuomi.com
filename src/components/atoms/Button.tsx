/**
 *
 * Button
 *
 */

import React, { FC, ReactElement } from "react";
import styled from "styled-components";

//import utils
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

interface DefaultProps {
  isDisabled: boolean;
  color?: string;
  padding?: string[];
  onSubmit: () => void;
  children?: string | ReactElement<any>;
}

interface ButtonStyleProps {
  color?: string;
  disabled?: boolean;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

const ButtonWrapper = styled.button<ButtonStyleProps>`
  display: flex;
  flex-flow: row nowrap;
  padding: 2px 40px;
  border-radius: 5px;
  background-color: ${props =>
    props.color === "blue" ? colors.BLUE : colors.WHITE};
  border: 1px ${colors.BORDER_GRAY} solid;
  outline: none;
  font-size: ${fontSize.MINI};
  transition-duration: 0.2s;
  color: ${props => (props.color === "blue" ? colors.WHITE : colors.BLACK)};
  padding-top: ${props => props.paddingTop && props.paddingTop};
  padding-bottom: ${props => props.paddingBottom && props.paddingBottom};
  padding-left: ${props => props.paddingLeft && props.paddingLeft};
  padding-right: ${props => props.paddingRight && props.paddingRight};
  &:hover {
    border-color: ${colors.LIGHTER_BLUE};
    background-color: ${colors.LIGHTER_BLUE};
    ${props => props.disabled && { "background-color": colors.BORDER_GRAY }}
    ${props => props.disabled && { "border-color": colors.BORDER_GRAY }};
  }
  cursor: pointer;
  ${props => props.disabled && { "background-color": colors.BORDER_GRAY }};
  ${props => props.disabled && { color: colors.BLACK }};
`;

const Button: FC<DefaultProps> = ({
  isDisabled,
  onSubmit,
  children,
  color,
  padding
}) => {
  return (
    <ButtonWrapper
      disabled={isDisabled}
      onClick={onSubmit}
      color={color}
      paddingTop={padding && padding[0]}
      paddingBottom={padding && padding[1]}
      paddingLeft={padding && padding[2]}
      paddingRight={padding && padding[3]}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
