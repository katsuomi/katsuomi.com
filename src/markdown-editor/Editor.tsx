import React, { FC, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import marked from "marked";

// import atoms
import TextArea from "components/atoms/TextArea";

interface DefaultProps {
  onChange: (value: string) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
`;

const LeftWrapper = styled.div`
  width: 100%;
`;

const RightWrapper = styled.div`
  padding-left: 15px;
  width: 100%;
`;

const Editor: FC<DefaultProps> = ({ onChange }) => {
  const [inputContent, setInputContent] = useState<string>("");

  // 以下をDBに保存し、
  // marked(inputContent);
  // 以下のように出力する.
  // <span dangerouslySetInnerHTML={{ __html: marked(inputContent) }}></span>

  const onHandleChange = (value: string) => {
    setInputContent(value);
    onChange(marked(value));
  };

  return (
    <>
      <Wrapper>
        <LeftWrapper>
          <TextArea
            rows={50}
            width="100%"
            onChange={onHandleChange}
            fontSize="15px"
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
