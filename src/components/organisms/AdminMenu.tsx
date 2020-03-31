import React, { FC } from "react";
import styled from "styled-components";

// import atoms
import Button from "components/atoms/Button";
import LinkAnchor from "components/atoms/LinkAnchor";

// import utils
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1300px;
  margin: 20px auto;
`;

const Section = styled.div`
`;

const Center = styled.div`
  text-align: center;
`;

const Title = styled.h3`
  margin-bottom: 8px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.04em;
  word-break: break-all;
  -webkit-font-feature-settings: "palt" 1;
  font-feature-settings: "palt" 1;
  font-size: ${fontSize.H3 };
  color: ${colors.BLACK };
`;

const AdminMenu: FC = () => (
  <Wrapper>
    <Section>
      <Center>
        <LinkAnchor src="/admin/create_article" isHoverWhite={ true }>
          <Button
            isDisabled={false}
            borderColor={ colors.BRIGHT_BLUE}
            backgroundColor={ colors.BRIGHT_BLUE}
            color={ colors.WHITE }
            padding={ [ "5px", "5px", "35px", "35px" ] }
          >
            記事を書く
        </Button>
        </LinkAnchor>
      </Center>
    </Section>

    <Section>
      <Title>記事一覧</Title>
    </Section>
  </Wrapper>
);

export default AdminMenu;
