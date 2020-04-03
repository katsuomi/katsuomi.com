/**
 *
 * Button
 *
 */

import React, { FC, ReactElement, FormEvent } from "react";
import styled from "styled-components";

//import utils
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

interface DefaultProps {
  isDisabled: boolean;
  isFontWeight?: boolean;
  color?: string;
  padding?: string[];
  width?: string;
  borderColor?: string;
  backgroundColor?: string;
  margin?: string[];
  onClick?: (e: FormEvent) => void;
  children?: string | ReactElement<any>;
}

interface ButtonStyleProps {
  color?: string;
  disabled?: boolean;
  width?: string;
  borderColor?: string;
  backgroundColor?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  isFontWeight?: boolean;
}

const ButtonWrapper = styled.button<ButtonStyleProps>`
  border-radius: 5px;
  background-color: ${props => props.backgroundColor && props.backgroundColor};
  border: 2px
    ${props =>
    !props.disabled && props.borderColor
      ? props.borderColor
      : colors.BORDER_GRAY}
    solid;
  outline: none;
  font-size: ${fontSize.MINI};
  font-weight: ${props => props.isFontWeight && "bold"};
  transition-duration: 0.2s;
  color: ${props => props.color && props.color};
  padding-top: ${props => props.paddingTop && props.paddingTop};
  padding-bottom: ${props => props.paddingBottom && props.paddingBottom};
  padding-left: ${props => props.paddingLeft && props.paddingLeft};
  padding-right: ${props => props.paddingRight && props.paddingRight};
  margin-top: ${props => props.marginTop && props.marginTop};
  margin-bottom: ${props => props.marginBottom && props.marginBottom};
  margin-left: ${props => props.marginLeft && props.marginLeft};
  margin-right: ${props => props.marginRight && props.marginRight};
  width: ${props => props.width};
  &:hover {
    ${props => props.disabled && { "background-color": colors.BORDER_GRAY }};
    ${props => props.disabled && { "border-color": colors.BORDER_GRAY }};
    opacity: 0.5;
  }
  cursor: pointer;
  ${props => props.disabled && { "background-color": colors.BORDER_GRAY }};
  ${props => props.disabled && { color: colors.WHITE }};
`;

const Button: FC<DefaultProps> = ({
  isDisabled,
  onClick,
  children,
  color,
  padding,
  isFontWeight,
  width,
  borderColor,
  backgroundColor,
  margin
}) => {
  return (
    <ButtonWrapper
      disabled={isDisabled}
      onClick={onClick}
      width={width}
      color={color}
      isFontWeight={isFontWeight}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      marginTop={margin && margin[0]}
      marginBottom={margin && margin[1]}
      marginLeft={margin && margin[2]}
      marginRight={margin && margin[3]}
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
