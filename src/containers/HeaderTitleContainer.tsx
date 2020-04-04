import React, { FC } from "react";
import { connect } from "react-redux";

// import atoms
import LinkAnchor from "components/atoms/LinkAnchor";

// import models
import { AppState } from "models/index";
import * as Model from "models/adminLoginModel";

// import methods
import { isAdmin } from "methods/adminLoginMethods";

interface StateProps {
  user?: Model.User;
}

type DefaultProps = StateProps;

const HeaderTitleContainer: FC<DefaultProps> = ({ user }) => {
  let path = '/';
  if(user !== undefined && isAdmin(user)) {
    path = '/admin';
  }

  return (
    <LinkAnchor src={path} isHoverWhite={true}>
      Katsuomi.com
    </LinkAnchor>
  );
};

const mapStateToProps = (state: AppState) => ({
  user: state.adminLogin.user
});

export default connect(mapStateToProps, null)(HeaderTitleContainer);
