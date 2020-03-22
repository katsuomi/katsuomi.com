import { combineReducers } from "redux";

// import reducers
import adminLogin from "reducers/adminLoginReducer";
import flashMessages from "reducers/flashMessagesReducer";
import contactForm from "reducers/contactFormReducer";
import article from "reducers/articleReducer";

export default combineReducers({
  adminLogin,
  flashMessages,
  contactForm,
  article
});
