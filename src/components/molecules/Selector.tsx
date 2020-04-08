/**
 *
 * Selector
 *
 */

import React, { FC } from "react";
import styled from "styled-components";
import Select, { ValueType, OptionTypeBase } from 'react-select';

// import utils
import * as fontSize from "utils/fontSize";

interface DefaultProps<OptionType extends OptionTypeBase> {
  options: ValueType<OptionType>[];
  isTitle?: boolean;
  width: number;
  onChange: (object: ValueType<OptionType>) => void;
}

interface SelectorStyleProps {
  isTitle?: boolean;
  width: number;
}

const Wrapper = styled.div<SelectorStyleProps>`
  & > div {
    width: ${props => props.width}px;
  }
  & > div > div {
    border: none;
    font-size: ${props => props.isTitle ? fontSize.H3 : undefined};
    font-weight: ${props => props.isTitle ? 700 : undefined};
  }
`;

const Selector: FC<DefaultProps<any>> = ({ options, isTitle, width, onChange }) => {
  return (
    <Wrapper isTitle={isTitle} width={width}>
      <Select options={options} defaultValue={options[0]} onChange={(object) => onChange(object)} />
    </Wrapper>
  );
};

export default Selector;
