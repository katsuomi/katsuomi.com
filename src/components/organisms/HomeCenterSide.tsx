import React, { FC } from "react";
import styled from "styled-components";
import HomeCenterContainer from "containers/HomeCenterContainer";

const Wrapper = styled.div`
  width: 60%;
`;

const HomeCenterSide: FC = () => (
  <>
    <Wrapper>
      <HomeCenterContainer />
    </Wrapper>
  </>
);

export default HomeCenterSide;
