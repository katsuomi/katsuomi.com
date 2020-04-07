import React, { FC } from "react";
import styled from "styled-components";

// import containers
import HomeRightContainer from "containers/home/HomeRightContainer";

const Wrapper = styled.div`
  width: 20%;
  order: 2;
`;

const HomeRightSide: FC = () => (
  <Wrapper>
    <HomeRightContainer />
  </Wrapper>
);

export default HomeRightSide;
