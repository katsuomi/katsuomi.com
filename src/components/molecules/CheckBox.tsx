/**
 *
 * CheckBox
 *
 */

import React, { FC, ReactElement } from "react";
import styled from "styled-components";

// import atoms
import Input from "components/atoms/Input";
import Label from "components/atoms/Label";

// import utils
import * as colors from "utils/color";

interface DefaultProps {
  keyWord: string;
  children: string | ReactElement<any>;
  onChange: () => void;
}

const CheckBoxWrapper = styled.p`
  display: flex;
`;

const LabelWrapper = styled.span`
  margin-left: 20px;
  margin-top: 5px;
`;

const CheckBox: FC<DefaultProps> = ({ keyWord, children, onChange }) => {
  return (
    <CheckBoxWrapper>
      <Input type="checkbox" id={keyWord} onChange={onChange} />
      <LabelWrapper>
        <Label htmlFor={keyWord}>{children}</Label>
      </LabelWrapper>
    </CheckBoxWrapper>
  );
};

export default CheckBox;
