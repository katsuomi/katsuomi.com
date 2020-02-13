/**
 *
 * Input
 *
 */

import React, { FC, ReactElement } from "react";
import styled from "styled-components";

//import utils
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

interface DefaultProps {
  placeholder?: string;
  isPassword: boolean;
  value?: string;
  width?: string;
  onChange: (value: string) => void;
  children?: string | ReactElement<any>;
}

const InputWrapper = styled.input`
  background-color: ${colors.WHITE};
  border: 1px ${colors.BORDER_GRAY} solid;
  outline: none;
  font-size: ${fontSize.MINI};
  transition: all 0.2s;
  color: ${colors.BLACK};
  &:focus {
    border-color: ${colors.LIGHTER_BLUE};
  }
  width: ${props => (props.width ? props.width : "inherit")};
`;

const Input: FC<DefaultProps> = ({
  placeholder,
  value,
  width,
  onChange,
  isPassword
}) => {
  return (
    <InputWrapper
      type={isPassword ? "password" : undefined}
      placeholder={placeholder}
      value={value}
      width={width}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default Input;
