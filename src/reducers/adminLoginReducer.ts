import { Reducer } from "redux";

// import constants
import * as ActionTypes from "constants/actionTypes";

// import models
import * as Model from "models/adminLoginModel";

export const initialState: Model.AdminLoginState = {
  user: { uid: "" },
  isLoading: false
};

const adminLogin: Reducer<Model.AdminLoginState, Model.AdminLoginAction> = (
  state: Model.AdminLoginState = initialState,
  action: Model.AdminLoginAction
): Model.AdminLoginState => {
  switch (action.type) {
    case ActionTypes.ADMIN_LOGIN_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
    case ActionTypes.ADMIN_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.ADMIN_LOGIN_CACHE_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.ADMIN_LOGIN_CACHE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
    case ActionTypes.ADMIN_LOGIN_CACHE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default: {
      return state;
    }
  }
};

export default adminLogin;
