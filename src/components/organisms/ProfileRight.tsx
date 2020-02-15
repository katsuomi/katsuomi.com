import React, { FC } from "react";
import styled from "styled-components";

// import utils
import * as colors from "utils/color";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  color: #313131;
  margin: 9px 20px;
  color: ${colors.CAPTION};
`;

const Bold = styled.span`
  font-weight: bold;
  margin-left: 20px;
  color: ${colors.LIGHTER_BLACK};
`;

const ProfileRight: FC = () => (
  <>
    <Wrapper>
      <P>
        名前: <Bold>青木克臣</Bold>
      </P>
      <P>
        所属: <Bold>名古屋大学情報学部4回生</Bold>
      </P>
      <P>
        趣味: <Bold>競馬,筋トレ,ドライブ,フットサル, Jリーグ</Bold>
      </P>
      <P> ひとこと:</P>
      <P>
        <Bold>
          技術力だけに特化するのではなく、ビジネスのこともしっかりと考えられるエンジニアになりたい。
        </Bold>
      </P>
    </Wrapper>
  </>
);

export default ProfileRight;
