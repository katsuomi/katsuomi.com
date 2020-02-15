import React, { FC } from "react";
import styled from "styled-components";

// import utils
import * as colors from "utils/color";

// import images
import qiita from "images/qiita.png";
import github from "images/github.png";
import twitter from "images/twitter.png";
import facebook from "images/facebook.png";

interface AnchorProps {
  href?: string;
  target?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const A = styled.a.attrs(
  ({ href }): AnchorProps => ({
    href: href,
    target: "_blank"
  })
)`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Img = styled.img<{ src: string }>`
  width: ${props =>
    props.src === "/static/media/qiita.c6c37228.png" ? "100px" : "50px"};
  height: 50px;
  align-self: center;
`;

const ProfileBottom: FC = () => (
  <>
    <Wrapper>
      <A href="https://qiita.com/katsuomi">
        <Img src={qiita} />
      </A>
      <A href="https://github.com/katsuomi">
        <Img src={github} />
      </A>
      <A href="https://twitter.com/aoki_eng">
        <Img src={twitter} />
      </A>
      <A href="https://www.facebook.com/aoki.katsuomi">
        <Img src={facebook} />
      </A>
    </Wrapper>
  </>
);

export default ProfileBottom;
