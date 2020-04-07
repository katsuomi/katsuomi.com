import React, { FC } from "react";
import styled from "styled-components";

// import utils
import * as breakPoints from "utils/breakPoints";

// import containers
import HomeCenterContainer from "containers/home/HomeCenterContainer";

const Wrapper = styled.div`
  width: ${breakPoints.isSmartPhone() ? '100%' : '60%'};
  order: ${breakPoints.isSmartPhone() ? 0 : 1};
`;

const HomeCenterSide: FC = () => (
  <Wrapper>
    <HomeCenterContainer />
  </Wrapper>
);

export default HomeCenterSide;
