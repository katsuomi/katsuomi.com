import React, { FC } from "react";
import { connect } from "react-redux";

// import organisms
import AdminLogin from "components/organisms/admin/AdminLogin";
import AdminMenu from "components/organisms/admin/AdminMenu";

// import models
import { AppState } from "models/index";
import * as Model from "models/adminLoginModel";

// import methods
import { isAdmin } from "methods/adminLoginMethods";

interface StateProps {
  user?: Model.User;
}

type DefaultProps = StateProps;

const AdminContainer: FC<DefaultProps> = ({ user }) => {
  if(user === undefined || (user && !isAdmin(user))) {
    return <AdminLogin />;
  }
  return (
    <>
      <AdminMenu />
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  user: state.adminLogin.user
});

export default connect(mapStateToProps, null)(AdminContainer);
