/**
 *
 * MarkDownContent
 *
 */

import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import marked from "marked";

//import utils
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

interface DefaultProps {
  content: any;
}

const MarkDownContentWrapper = styled.span``;

const MarkDownContent: FC<DefaultProps> = ({ content }) => {
  return (
    <MarkDownContentWrapper
      dangerouslySetInnerHTML={{
        __html: marked(content)
      }}
    />
  );
};

export default MarkDownContent;
