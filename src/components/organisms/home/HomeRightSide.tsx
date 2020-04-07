import React, { FC } from "react";
import styled from "styled-components";

// import utils
import * as breakPoints from "utils/breakPoints";

// import containers
import HomeRightContainer from "containers/home/HomeRightContainer";

const Wrapper = styled.div`
  width: ${breakPoints.isSmartPhone() ? '100%' : "20%"};
  order: 2;
`;

const HomeRightSide: FC = () => (
  <Wrapper>
    <HomeRightContainer />
  </Wrapper>
);

export default HomeRightSide;
