import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

// import utils
import * as colors from "utils/color";
import * as breakPoints from "utils/breakPoints";

// import commons
import Spinner from "components/commons/Spinner";

//import atoms
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";

// import actions
import { adminLogin, adminLoginCache } from "actions/adminLoginAction";

// import models
import { AppState } from "models/index";

interface StateProps {
  isLoading?: boolean;
}

interface DispatchProps {
  adminLoginStart: (payload: string) => void;
  adminLoginCacheStart: () => void;
}

type DefaultProps = StateProps & DispatchProps;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${colors.BLUE};
  margin: 150px ${breakPoints.isSmartPhone() ? "5%" : "25%"};
  padding-top: 20px;
  padding-bottom: 95px;
  background-color: ${colors.BG_GRAY};
  > input {
    margin-top: 25px;
  }

  > button {
    margin-top: 25px;
  }
`;

const Title = styled.p`
  padding: 5px 10px;
  font-weight: bold;
  border-bottom: 1px solid ${colors.BG_GRAY};
`;

const AdminLoginContainer: FC<DefaultProps> = ({
  isLoading,
  adminLoginStart,
  adminLoginCacheStart
}) => {
  const [password, setPassword] = useState<string>("");
  useEffect(() => {
    setTimeout(() => adminLoginCacheStart(), 1000); // firebaseの読み込みの関係で、1秒遅延させる.
  }, [adminLoginCacheStart]);
  const handleOnChange = (value: string) => {
    setPassword(value);
  };

  const handleOnSubmit = () => {
    adminLoginStart(password);
  };

  return (
    <>
      {isLoading ? (
        <Spinner top={breakPoints.isSmartPhone() ? "58%" : "35%"} />
      ) : (
        <Wrapper>
          <Title>Admin Login</Title>
          <Input
            placeholder="password"
            onChange={handleOnChange}
            width="250px"
            isPassword={true}
          />
          <Button
            onSubmit={handleOnSubmit}
            color="blue"
            padding={["5px", "5px", "99px", "99px"]}
            isDisabled={password ? false : true}
          >
            Login
          </Button>
        </Wrapper>
      )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.adminLogin.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      adminLoginStart: payload => adminLogin.start(payload),
      adminLoginCacheStart: () => adminLoginCache.start()
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLoginContainer);
