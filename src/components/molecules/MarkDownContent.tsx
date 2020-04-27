/**
 *
 * MarkDownContent
 *
 */

import React, { FC } from "react";
import styled from "styled-components";
import marked from "marked";

interface DefaultProps {
  content: string;
}

// dangerouslySetInnerHTMLより、styleは、呼び出し元で設定する
const MarkDownContentWrapper = styled.span``;

const MarkDownContent: FC<DefaultProps> = ({ content }) => {
  return (
    <MarkDownContentWrapper dangerouslySetInnerHTML={{ __html: marked(content) }} />
  );
};

export default MarkDownContent;
