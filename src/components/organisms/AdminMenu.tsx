import React, { FC } from "react";
import styled from "styled-components";

// import atoms
import Button from "components/atoms/Button";
import Anchor from "components/atoms/Anchor";

// import utils
import * as colors from "utils/color";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
`;

const AdminMenu: FC = () => (
  <>
    <Wrapper>
      <Anchor src="/admin/create_article">
        <Button
          isDisabled={false}
          borderColor={colors.BRIGHT_BLUE}
          backgroundColor={colors.BRIGHT_BLUE}
          color={colors.WHITE}
          padding={["5px", "5px", "35px", "35px"]}
        >
          記事を書く
        </Button>
      </Anchor>
    </Wrapper>
  </>
);

export default AdminMenu;
