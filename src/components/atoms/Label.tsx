/**
 *
 * Label
 *
 */

import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//import utils
import * as colors from "utils/color";

interface DefaultProps {
  htmlFor?: string;
  children?: string | ReactElement<any>;
}

const LabelWrapper = styled.label``;

const Label: FC<DefaultProps> = ({ htmlFor, children }) => {
  return <LabelWrapper htmlFor={htmlFor}>{children}</LabelWrapper>;
};

export default Label;
