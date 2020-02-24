import React, { FC, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";

// import organisms
import AdminLogin from "components/organisms/AdminLogin";
import AdminCreateArticleTags from "react-input-tag/AdminCreateArticleTags";

// import molecules
import InputLabel from "components/molecules/InputLabel";
// import atoms
import Input from "components/atoms/Input";
import TextArea from "components/atoms/TextArea";
import Button from "components/atoms/Button";

// import models
import { AppState } from "models/index";
import * as Model from "models/adminLoginModel";

// import methods
import { isAdmin } from "methods/adminLoginMethods";

// import utils
import * as breakPoints from "utils/breakPoints";
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

interface StateProps {
  user?: Model.User;
}

type DefaultProps = StateProps;

const ContentWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const Title = styled.h4`
  font-size: ${fontSize.H3};
  align-self: center;
  color: ${colors.CAPTION};
`;

const Left = styled.span`
  align-self: flex-start;
  margin-left: 14%;
`;

const AdminCreateArticleContainer: FC<DefaultProps> = ({ user }) => {
  const [title, setTitle] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [thumbnailImagePath, setThumbnailImagePath] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [startDate, setStartDate] = useState(new Date());
  const isDisabled = title && content ? false : true;

  if (user === undefined || (user && !isAdmin(user))) {
    return <AdminLogin />;
  }
  return (
    <>
      <ContentWrapper>
        <Title>記事をかく</Title>
        <Left>
          <InputLabel isRequired={true}>タグを追加</InputLabel>
        </Left>
        <AdminCreateArticleTags />
        <Left>
          <InputLabel isRequired={true}>タイトル</InputLabel>
        </Left>
        <Input
          placeholder=""
          isRequired={true}
          value={title}
          width={breakPoints.isSmartPhone() ? "300px" : "70vw"}
          borderColor={colors.BORDER_LIGHT_GRAY}
          backgroundColor={colors.BACKGROUND_LIGHT_GRAY}
          margin={["10px", "10px", "0px", "0px"]}
          padding={["10px", "10px", "10px", "10px"]}
          onChange={setTitle}
        />
        <Left>
          <InputLabel isRequired={true}>日付</InputLabel>
        </Left>
        <Input
          placeholder=""
          isRequired={true}
          date={startDate}
          type="date"
          width={breakPoints.isSmartPhone() ? "300px" : "70vw"}
          borderColor={colors.BORDER_LIGHT_GRAY}
          backgroundColor={colors.BACKGROUND_LIGHT_GRAY}
          margin={["10px", "10px", "0px", "0px"]}
          padding={["10px", "10px", "10px", "10px"]}
          onChange={setStartDate}
        />
      </ContentWrapper>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  user: state.adminLogin.user
});

export default connect(mapStateToProps, null)(AdminCreateArticleContainer);
