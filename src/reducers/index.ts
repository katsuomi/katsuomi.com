import { combineReducers } from "redux";

// import reducers
import adminLogin from "reducers/adminLoginReducer";
import flashMessages from "reducers/flashMessagesReducer";

export default combineReducers({ adminLogin, flashMessages });
