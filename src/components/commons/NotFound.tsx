import React, { FC } from "react";
import styled from "styled-components";

// import atoms
import Button from "components/atoms/Button";

// import utils
import * as fontSize from "utils/fontSize";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
`;

const NotFound: FC = () => (
  <>
    <Wrapper>
      This page is not Found.
      <Button isDisabled={false}>go Home</Button>
    </Wrapper>
  </>
);

export default NotFound;
