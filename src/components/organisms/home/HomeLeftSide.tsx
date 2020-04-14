import React, { FC } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

// import organisms
import ProfileLeft from "components/organisms/profile/ProfileLeft";

// import atoms
import Anchor from "components/atoms/Anchor";

// import commons
import Spinner from "components/commons/Spinner";

// import utils
import * as breakPoints from "utils/breakPoints";

// import images
import qiita from "images/qiita.jpg";
import github from "images/github.jpg";
import twitter from "images/twitter.jpg";
import facebook from "images/facebook.jpg";

const Wrapper = styled.div`
  width: ${breakPoints.isSmartPhone() ? '100%' : '20%'};
  order: ${breakPoints.isSmartPhone() ? 1 : 0};
`;

const TimeLineWrapper = styled.div`
  height: 720px;
  overflow: scroll;
  display: ${breakPoints.isSmartPhone() && 'none'}
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

const Img = styled.img<{ isWide?: boolean; }>`
  width: ${props => props.isWide ? "100px" : "50px"};
  height: 50px;
  align-self: center;
`;

const HomeLeftSide: FC = () => (
  <>
    {/* ブラウザバックへの対応 */}
    <Helmet>
      <script src="https://platform.twitter.com/widgets.js" defer />
    </Helmet>
    <Wrapper>
      <ProfileWrapper>
        <ProfileLeft />
        <SNSWrapper>
          <Anchor href="https://qiita.com/katsuomi">
            <Img src={qiita} isWide={true} decoding='async' />
          </Anchor>
          <Anchor href="https://github.com/katsuomi">
            <Img src={github} decoding='async' />
          </Anchor>
          <Anchor href="https://twitter.com/aoki_eng">
            <Img src={twitter} decoding='async' />
          </Anchor>
          <Anchor href="https://www.facebook.com/aoki.katsuomi">
            <Img src={facebook} decoding='async' />
          </Anchor>
        </SNSWrapper>
      </ProfileWrapper>
      <TimeLineWrapper>
        <TimeLineEmbedded className="twitter-timeline">
          {!breakPoints.isSmartPhone() &&
            <Spinner
              top={breakPoints.isSmartPhone() ? "60%" : "85%"}
              left={breakPoints.isSmartPhone() ? "" : "10%"}
            />
          }
        </TimeLineEmbedded>
      </TimeLineWrapper>
    </Wrapper>
  </>
);

export default HomeLeftSide;
