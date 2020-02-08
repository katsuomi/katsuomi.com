// import constants
import * as ActionTypes from "constants/actionTypes";

// import model
import * as Model from "models/adminLoginModel";

export const adminLogin = {
  start: (password: string) => ({
    type: ActionTypes.ADMIN_LOGIN_START as typeof ActionTypes.ADMIN_LOGIN_START,
    payload: password
  }),
  success: (user: Model.User) => ({
    type: ActionTypes.ADMIN_LOGIN_SUCCESS as typeof ActionTypes.ADMIN_LOGIN_SUCCESS,
    payload: user
  }),

  failure: () => ({
    type: ActionTypes.ADMIN_LOGIN_FAILURE as typeof ActionTypes.ADMIN_LOGIN_FAILURE
  })
};

export const adminLoginCache = {
  start: () => ({
    type: ActionTypes.ADMIN_LOGIN_CACHE_START as typeof ActionTypes.ADMIN_LOGIN_CACHE_START
  }),
  success: (user: Model.User) => ({
    type: ActionTypes.ADMIN_LOGIN_CACHE_SUCCESS as typeof ActionTypes.ADMIN_LOGIN_CACHE_SUCCESS,
    payload: user
  }),

  failure: () => ({
    type: ActionTypes.ADMIN_LOGIN_CACHE_FAILURE as typeof ActionTypes.ADMIN_LOGIN_CACHE_FAILURE
  })
};
