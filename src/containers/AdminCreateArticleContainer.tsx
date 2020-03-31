import React, { FC, useState, FormEvent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { bindActionCreators, Dispatch } from "redux";

// import organisms
import AdminLogin from "components/organisms/AdminLogin";
import AdminCreateArticleTags from "components/react-input-tag/AdminCreateArticleTags";

// import molecules
import InputLabel from "components/molecules/InputLabel";
import CheckBox from "components/molecules/CheckBox";

// import atoms
import Input from "components/atoms/Input";
import TextArea from "components/atoms/TextArea";
import Button from "components/atoms/Button";

// import commons
import Spinner from "components/commons/Spinner";

// import actions
import { createArticle } from "actions/articleAction";

// import models
import { AppState } from "models/index";
import * as adminLoginModel from "models/adminLoginModel";
import * as articleModel from "models/articleModel";
import * as tagModel from "models/tagModel";

// import methods
import { isAdmin } from "methods/adminLoginMethods";

// import utils
import * as breakPoints from "utils/breakPoints";
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

// import imageUploader
import ImageUploader from "components/imageUploader/ImageUploader";

// import markdown-editor
import Editor from "components/markdown-editor/Editor";

interface StateProps {
  user?: adminLoginModel.User;
  isLoading?: boolean;
}

interface DispatchProps {
  createArticle: (payload: articleModel.Article) => void;
}

type DefaultProps = StateProps & DispatchProps;

const ContentWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
`;

const Title = styled.h4`
  font-size: ${fontSize.H3};
  align-self: center;
  color: ${colors.CAPTION};
`;

const Left = styled.div`
  align-self: flex-start;
  margin-left: 14%;
`;

const AdminCreateArticleContainer: FC<DefaultProps> = ({
  user,
  isLoading,
  createArticle
}) => {
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [thumbnailImagePath, setThumbnailImagePath] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tagIds, setTagIds] = useState<string[]>([]);
  const [date, setDate] = useState<Date>(new Date());
  const [isAddSlideShow, setIsAddSlideShow] = useState<boolean>(false);

  const isDisabled =
    title && subTitle && content && thumbnailImagePath && date ? false : true;

  if (user === undefined || (user && !isAdmin(user))) {
    return <AdminLogin />;
  }

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      title: title,
      subTitle: subTitle,
      thumbnail_image_path: thumbnailImagePath,
      content: content,
      date: date,
      tag_ids: tagIds,
      is_add_slide_show: isAddSlideShow
    };

    await createArticle(payload);
    setTitle("");
    setSubTitle("");
    setThumbnailImagePath("");
    setContent("");
    setTagIds([]);
    setDate(new Date());
    setIsAddSlideShow(false);
  };

  const handleOnChangeIsAddSlideShow = () => {
    setIsAddSlideShow(!isAddSlideShow);
  };

  const handleOnBlurTagIds = (tags: tagModel.Tag[]) => {
    tags.forEach(tag => setTagIds(tagIds => _.uniq([...tagIds, tag.id])));
  };

  return (
    <>
      {isLoading ? (
        <Spinner
          top={breakPoints.isSmartPhone() ? "58%" : "35%"}
          left={"50%"}
        />
      ) : (
        <ContentWrapper>
          <Title>記事をかく</Title>
          <Left>
            <InputLabel isRequired={true}>タグを追加</InputLabel>
          </Left>
          <AdminCreateArticleTags onBlur={tags => handleOnBlurTagIds(tags)} />
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
            <InputLabel isRequired={true}>サブタイトル</InputLabel>
          </Left>
          <Input
            placeholder=""
            isRequired={true}
            value={subTitle}
            width={breakPoints.isSmartPhone() ? "300px" : "70vw"}
            borderColor={colors.BORDER_LIGHT_GRAY}
            backgroundColor={colors.BACKGROUND_LIGHT_GRAY}
            margin={["10px", "10px", "0px", "0px"]}
            padding={["10px", "10px", "10px", "10px"]}
            onChange={setSubTitle}
          />
          <Left>
            <InputLabel isRequired={true}>日付</InputLabel>
          </Left>
          <Input
            placeholder=""
            isRequired={true}
            date={date}
            type="date"
            width={breakPoints.isSmartPhone() ? "300px" : "70vw"}
            borderColor={colors.BORDER_LIGHT_GRAY}
            backgroundColor={colors.BACKGROUND_LIGHT_GRAY}
            margin={["10px", "10px", "0px", "0px"]}
            padding={["10px", "10px", "10px", "10px"]}
            onChange={setDate}
          />
          <Left>
            <InputLabel isRequired={true}>サムネイル画像</InputLabel>
          </Left>
          <ImageUploader
            onChange={setThumbnailImagePath}
            value="サムネイル画像"
          />
          <Left>
            <CheckBox
              keyWord="isSlider"
              onChange={handleOnChangeIsAddSlideShow}
            >
              スライドショーに載せる(横長写真推奨)
            </CheckBox>
          </Left>
          <Left>
            <InputLabel isRequired={true}>内容</InputLabel>
          </Left>
          <Editor onChange={setContent} />

          <Button
            isDisabled={isDisabled}
            borderColor={colors.BLUE}
            backgroundColor={colors.BRIGHT_BLUE}
            color={colors.WHITE}
            isFontWeight={true}
            onClick={handleOnSubmit}
            padding={["3px", "3px", "80px", "80px"]}
            margin={["20px", "0px", "0px", "0px"]}
            width="75%"
          >
            送信
          </Button>
        </ContentWrapper>
      )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  user: state.adminLogin.user,
  isLoading: state.article.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      createArticle: payload => createArticle.start(payload)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminCreateArticleContainer);
