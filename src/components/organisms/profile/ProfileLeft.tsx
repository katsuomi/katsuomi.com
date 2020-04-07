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

const P = styled.p`

`;

const ProfileLeft: FC = () => (
  <>
    <Img src={katsuomi} />
    <P>Aoki katsuomi, Nagoya Univ B4,<br /> Software Engineer</P>
  </>
);

export default ProfileLeft;
