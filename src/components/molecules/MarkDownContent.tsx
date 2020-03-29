/**
 *
 * MarkDownContent
 *
 */

import React, { FC } from "react";
import styled from "styled-components";
import marked from "marked";

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
