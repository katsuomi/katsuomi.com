import React, { FC, useState, FormEvent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

// import utils
import * as colors from "utils/color";
import * as breakPoints from "utils/breakPoints";
// import molecules
import InputLabel from "components/molecules/InputLabel";
// import atoms
import Input from "components/atoms/Input";
import TextArea from "components/atoms/TextArea";
import Button from "components/atoms/Button";

// import actions
import { submitContactForm } from "actions/contactFormAction";
// import models
import * as Model from "models/contactFormModel";

interface DispatchProps {
  submitContactForm: (payload: Model.ContactFormType) => void;
}

const ContentWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: ${breakPoints.isSmartPhone() ? "5%" : "15%"};
`;

const ContactFormContainer: FC<DispatchProps> = ({ submitContactForm }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const regexpForEmail = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
  const isDisabled =
    name && email && content && regexpForEmail.test(email) ? false : true;

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data: Model.ContactFormType = {
      name: name,
      email: email,
      content: content
    };
    submitContactForm(data);
    setName("");
    setEmail("");
    setContent("");
  };
  return (
    <ContentWrapper>
      <InputLabel isRequired={true}>お名前</InputLabel>
      <Input
        placeholder=""
        isRequired={true}
        value={name}
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
        type="email"
        isRequired={true}
        value={email}
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
        value={content}
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
        onClick={handleOnSubmit}
      >
        送信
      </Button>
    </ContentWrapper>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      submitContactForm: payload => submitContactForm.start(payload)
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(ContactFormContainer);
