import React, { FC } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

// import commons
import FlashMessage from "components/commons/FlashMessage";

// import actions
import { removeFlashMessage } from "actions/flashMessagesAction";

// import models
import * as Model from "models/flashMessagesModel";
import { AppState } from "models/index";

interface StateProps {
  flashMessages: Model.FlashMessageType[];
}

interface DispatchProps {
  removeFlashMessage: (payload: number) => void;
}

type DefaultProps = StateProps & DispatchProps;

const FlashMessagesContainer: FC<DefaultProps> = ({
  flashMessages,
  removeFlashMessage
}) => {
  return (
    <>
      {flashMessages.map((flashMessage: Model.FlashMessageType, i: number) => (
        <FlashMessage
          key={i}
          message={flashMessage.message}
          index={i}
          id={flashMessage.id}
          type={flashMessage.type}
          removeFlashMessage={removeFlashMessage}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  flashMessages: state.flashMessages.flashMessages
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      removeFlashMessage: payload => removeFlashMessage(payload)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashMessagesContainer);
