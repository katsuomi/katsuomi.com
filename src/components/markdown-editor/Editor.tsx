import React, { FC, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import marked from "marked";

// import atoms
import TextArea from "components/atoms/TextArea";
const TurndownService = require('turndown').default;
const turndownService = new TurndownService()

interface DefaultProps {
  onChange: (value: string) => void;
  defaultValue?: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
`;

const LeftWrapper = styled.div`
  width: 100%;
  height: 82vh;
  overflow: scroll;
`;

const RightWrapper = styled.div`
  width: 100%;
  padding-left: 15px;
  width: 100%;
  max-width: 700px;
  height: 82vh;
  overflow: scroll;
`;

const Editor: FC<DefaultProps> = ({ onChange, defaultValue }) => {
  const [inputContent, setInputContent] = useState<string>('');

  // firestoreの関係で、HTMLを保存するため、
  // 以下をDBに保存し、
  // marked(inputContent);
  // 以下のように出力する.
  // <span dangerouslySetInnerHTML={{ __html: marked(inputContent) }}></span>

  const onHandleChange = (value: string) => {
    setInputContent(value);
    onChange(marked(value));
  };

  // 編集用にmarkdownに戻す
  const defaultMarkdown = turndownService.turndown(defaultValue)

  return (
    <>
      <Wrapper>
        <LeftWrapper>
          <TextArea
            rows={200}
            width="100%"
            onChange={onHandleChange}
            fontSize="15px"
            defaultValue={defaultMarkdown}
          />
        </LeftWrapper>
        <RightWrapper>
          <ReactMarkdown source={inputContent} escapeHtml={true} />
        </RightWrapper>
      </Wrapper>
    </>
  );
};

export default Editor;
