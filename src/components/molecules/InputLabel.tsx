/**
 *
 * InputLabel
 *
 */

import React, { FC, ReactElement } from "react";
import styled from "styled-components";

// import utils
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

interface DefaultProps {
  isRequired: boolean;
  children?: string | ReactElement<any>;
}

const InputLabelWrapper = styled.span``;

const RequireWrapper = styled.span`
  background-color: ${colors.RED};
  color: ${colors.WHITE};
  font-size: ${fontSize.MOST_MICRO};
  border-radius: 2px;
  font-weight: bold;
  padding: 3px 10px;
  margin-left: 10px;
`;

const InputLabel: FC<DefaultProps> = ({ isRequired, children }) => {
  return (
    <InputLabelWrapper>
      {children}
      {isRequired && <RequireWrapper>必須</RequireWrapper>}
    </InputLabelWrapper>
  );
};

export default InputLabel;
