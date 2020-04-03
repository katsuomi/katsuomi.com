import React, { FC } from "react";
import styled from "styled-components";

// import utils
import * as breakPoints from "utils/breakPoints";

// import images
import katsuomi from "images/katsuomi.png";

const Img = styled.img`
  width: 200px;
  height: 200px;
  align-self: center;
`;

const ProfileLeft: FC = () => (
  <>
    <Img src={katsuomi} />
  </>
);

export default ProfileLeft;
