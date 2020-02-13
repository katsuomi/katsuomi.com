import React, { FC } from "react";
import { connect } from "react-redux";

// import components
import AdminLogin from "components/organisms/AdminLogin";
import AdminMenu from "components/organisms/AdminMenu";

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
  return <>{user && isAdmin(user) ? <AdminMenu /> : <AdminLogin />}</>;
};

const mapStateToProps = (state: AppState) => ({
  user: state.adminLogin.user
});

export default connect(mapStateToProps, null)(AdminContainer);
