import React, { FC } from "react";
import styled from "styled-components";

// import commons
import Spinner from "components/commons/Spinner";

// import utils
import * as breakPoints from "utils/breakPoints";

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

const HomeLeftSide: FC = () => (
  <>
    <Wrapper>
      <TimeLineWrapper>
        <TimeLineEmbedded className="twitter-timeline">
          <Spinner
            top={breakPoints.isSmartPhone() ? "30%" : "55%"}
            left={breakPoints.isSmartPhone() ? "" : "10%"}
          />
        </TimeLineEmbedded>
      </TimeLineWrapper>
    </Wrapper>
  </>
);

export default HomeLeftSide;
