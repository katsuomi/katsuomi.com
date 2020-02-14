import { combineReducers } from "redux";

// import reducers
import adminLogin from "reducers/adminLoginReducer";
import flashMessages from "reducers/flashMessagesReducer";
import contactForm from "reducers/contactFormReducer";

export default combineReducers({
  adminLogin,
  flashMessages,
  contactForm
});
