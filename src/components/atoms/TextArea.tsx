/**
 *
 * TextArea
 *
 */

import React, { FC, ReactElement } from "react";
import styled from "styled-components";

//import utils
import * as colors from "utils/color";

interface DefaultProps {
  placeholder?: string;
  isRequired?: boolean;
  value?: string;
  width?: string;
  borderColor?: string;
  backgroundColor?: string;
  margin?: string[];
  padding?: string[];
  fontSize?: string;
  rows: number;
  onChange: (value: string) => void;
  children?: string | ReactElement<any>;
}

interface TextAreaStyleProps {
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
  fontSize?: string;
}

const TextAreaWrapper = styled.textarea<TextAreaStyleProps>`
  background-color: ${props => props.backgroundColor && props.backgroundColor};
  border: 2px
    ${props => (props.borderColor ? props.borderColor : colors.BORDER_GRAY)}
    solid;
  outline: none;
  transition: all 0.2s;
  color: ${colors.BLACK};
  margin-top: ${props => props.marginTop && props.marginTop};
  margin-bottom: ${props => props.marginBottom && props.marginBottom};
  margin-left: ${props => props.marginLeft && props.marginLeft};
  margin-right: ${props => props.marginRight && props.marginRight};
  padding-top: ${props => props.paddingTop && props.paddingTop};
  padding-bottom: ${props => props.paddingBottom && props.paddingBottom};
  padding-left: ${props => props.paddingLeft && props.paddingLeft};
  padding-right: ${props => props.paddingRight && props.paddingRight};
  &:focus {
    border-color: ${colors.LIGHTER_BLUE};
  }
  width: ${props => (props.width ? props.width : "inherit")};
  font-size: ${props => props.fontSize && props.fontSize};
`;

const TextArea: FC<DefaultProps> = ({
  placeholder,
  isRequired,
  value,
  width,
  onChange,
  borderColor,
  backgroundColor,
  rows,
  margin,
  padding,
  fontSize
}) => {
  return (
    <TextAreaWrapper
      placeholder={placeholder}
      value={value}
      required={isRequired}
      width={width}
      fontSize={fontSize}
      borderColor={borderColor}
      rows={rows}
      backgroundColor={backgroundColor}
      marginTop={margin && margin[0]}
      marginBottom={margin && margin[1]}
      marginLeft={margin && margin[2]}
      marginRight={margin && margin[3]}
      paddingTop={padding && padding[0]}
      paddingBottom={padding && padding[1]}
      paddingLeft={padding && padding[2]}
      paddingRight={padding && padding[3]}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default TextArea;
