import { History } from 'history';
import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
// import reducers
import adminLogin from "reducers/adminLoginReducer";
import flashMessages from "reducers/flashMessagesReducer";
import contactForm from "reducers/contactFormReducer";
import article from "reducers/articleReducer";
import tag from "reducers/tagReducer";

const rootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    adminLogin,
    flashMessages,
    contactForm,
    article,
    tag
  });

export default rootReducer;
