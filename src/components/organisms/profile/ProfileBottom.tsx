import React, { FC } from "react";
import styled from "styled-components";

// import atoms
import Button from "components/atoms/Button";
import Anchor from "components/atoms/Anchor";
import LinkAnchor from "components/atoms/LinkAnchor";
// import utils
import * as colors from "utils/color";
import * as breakPoints from "utils/breakPoints";
import * as fontSize from "utils/fontSize";

// import images
import qiita from "images/qiita.png";
import github from "images/github.png";
import twitter from "images/twitter.png";
import facebook from "images/facebook.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: ${breakPoints.isSmartPhone() ? "10px" : "60px"};
`;

const Img = styled.img<{ src: string; }>`
  width: ${props =>
    props.src === "/static/media/qiita.c6c37228.png" ? "100px" : "50px"};
  height: 50px;
  align-self: center;
`;

const MiniMessage = styled.p`
  font-size: ${fontSize.MICRO};
  color: ${colors.INFO_GRAY};
  margin-top: 20px;
`;

const ProfileBottom: FC = () => (
  <>
    <Wrapper>
      <Anchor href="https://qiita.com/katsuomi">
        <Img src={qiita} />
      </Anchor>
      <Anchor href="https://github.com/katsuomi">
        <Img src={github} />
      </Anchor>
      <Anchor href="https://twitter.com/aoki_eng">
        <Img src={twitter} />
      </Anchor>
      <Anchor href="https://www.facebook.com/aoki.katsuomi">
        <Img src={facebook} />
      </Anchor>
    </Wrapper>
    <MiniMessage>
      開発の依頼やご質問等、まずはお気軽にご連絡ください。
    </MiniMessage>
    <LinkAnchor src="/contact" isHoverWhite={true}>
      <Button
        isDisabled={false}
        backgroundColor={colors.BRIGHT_BLUE}
        color={colors.WHITE}
        padding={["5px", "5px", "60px", "60px"]}
        width={breakPoints.isSmartPhone() ? "" : "500px"}
      >
        お問い合わせはこちら
      </Button>
    </LinkAnchor>
  </>
);

export default ProfileBottom;
