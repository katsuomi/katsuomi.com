import React, { FC, useState } from "react";
import styled from "styled-components";

// import utils
import * as colors from "utils/color";
import * as breakPoints from "utils/breakPoints";
// import molecules
import InputLabel from "components/molecules/InputLabel";
// import atoms
import Input from "components/atoms/Input";
import TextArea from "components/atoms/TextArea";
import Button from "components/atoms/Button";

const ContentWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: ${breakPoints.isSmartPhone() ? "5%" : "15%"};
`;

const ContactFormContainer: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const isDisabled = name && email && content ? false : true;
  return (
    <ContentWrapper>
      <InputLabel isRequired={true}>お名前</InputLabel>
      <Input
        placeholder=""
        isPassword={false}
        isRequired={true}
        width={breakPoints.isSmartPhone() ? "300px" : "70vw"}
        borderColor={colors.BORDER_LIGHT_GRAY}
        backgroundColor={colors.BACKGROUND_LIGHT_GRAY}
        margin={["10px", "10px", "0px", "0px"]}
        padding={["10px", "10px", "10px", "10px"]}
        onChange={setName}
      />
      <InputLabel isRequired={true}>メールアドレス</InputLabel>
      <Input
        placeholder=""
        isPassword={false}
        isEmail={true}
        isRequired={true}
        width={breakPoints.isSmartPhone() ? "300px" : "70vw"}
        borderColor={colors.BORDER_LIGHT_GRAY}
        backgroundColor={colors.BACKGROUND_LIGHT_GRAY}
        margin={["10px", "10px", "0px", "0px"]}
        padding={["10px", "10px", "10px", "10px"]}
        onChange={setEmail}
      />
      <InputLabel isRequired={true}>お問い合わせ内容</InputLabel>
      <TextArea
        rows={breakPoints.isSmartPhone() ? 10 : 20}
        placeholder=""
        fontSize={"15px"}
        isRequired={true}
        width={breakPoints.isSmartPhone() ? "300px" : "70vw"}
        borderColor={colors.BORDER_LIGHT_GRAY}
        backgroundColor={colors.BACKGROUND_LIGHT_GRAY}
        margin={["10px", "10px", "0px", "0px"]}
        padding={["10px", "10px", "10px", "10px"]}
        onChange={setContent}
      />
      <Button
        isDisabled={isDisabled}
        borderColor={colors.BLUE}
        backgroundColor={colors.BRIGHT_BLUE}
        color={colors.WHITE}
        isFontWeight={true}
        onSubmit={() => console.log("yeah")}
      >
        送信
      </Button>
    </ContentWrapper>
  );
};

export default ContactFormContainer;
