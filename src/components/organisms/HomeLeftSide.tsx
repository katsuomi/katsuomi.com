import React, { FC } from "react";
import styled from "styled-components";

// import organisms
import ProfileLeft from "components/organisms/ProfileLeft";

// import atoms
import Anchor from "components/atoms/Anchor";

// import commons
import Spinner from "components/commons/Spinner";

// import utils
import * as breakPoints from "utils/breakPoints";

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
  width: 20%;
`;

const TimeLineWrapper = styled.div`
  height: 1000px;
  overflow: scroll;
`;

const TimeLineEmbedded = styled.a.attrs({
  href: "https://twitter.com/aoki_eng?ref_src=twsrc%5Etfw"
})`
  height: 400px;
  &:hover {
    opacity: 0.7;
  }
`;

const ProfileWrapper = styled.div`
  margin: 20px auto;
  text-align: center;
`;

const SNSWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: ${breakPoints.isSmartPhone() ? "10px" : "60px"};
  justify-content: center;
`;

const Img = styled.img<{ src: string }>`
  width: ${props =>
    props.src === "/static/media/qiita.c6c37228.png" ? "100px" : "50px"};
  height: 50px;
  align-self: center;
`;

const HomeLeftSide: FC = () => (
  <>
    <Wrapper>
      <ProfileWrapper>
        <ProfileLeft />
        <SNSWrapper>
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
        </SNSWrapper>
      </ProfileWrapper>
      <TimeLineWrapper>
        <TimeLineEmbedded className="twitter-timeline">
          <Spinner
            top={breakPoints.isSmartPhone() ? "60%" : "85%"}
            left={breakPoints.isSmartPhone() ? "" : "10%"}
          />
        </TimeLineEmbedded>
      </TimeLineWrapper>
    </Wrapper>
  </>
);

export default HomeLeftSide;
