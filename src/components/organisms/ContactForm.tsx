import React, { FC } from "react";
import styled from "styled-components";

// import utils
import * as fontSize from "utils/fontSize";
import * as colors from "utils/color";

// import containers
import ContactFormContainer from "containers/ContactFormContainer";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const Title = styled.h2`
  font-size: ${fontSize.H2};
  color: ${colors.CAPTION};
`;

const SubTitle = styled.p`
  font-size: ${fontSize.MICRO};
  color: ${colors.INFO_GRAY};
  margin-top: -20px;
`;

const ContactForm: FC = () => (
  <>
    <Wrapper>
      <Title>お問い合わせ</Title>
      <SubTitle>開発の依頼やご質問等、まずはお気軽にご連絡ください。</SubTitle>
      <ContactFormContainer />
    </Wrapper>
  </>
);

export default ContactForm;
