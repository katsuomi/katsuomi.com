/**
 *
 * adminLoginModel
 *
 */

// import constants
import * as ActionTypes from "constants/actionTypes";

export interface User {
  uid: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  emailVerified?: boolean;
  phoneNumber?: string;
  isAnonymous?: boolean;
}

export interface AdminLoginState {
  user: User;
  isLoading: boolean;
}

export interface AdminLoginResult {
  user: User;
}

export interface AdminLoginStartAction {
  type: typeof ActionTypes.ADMIN_LOGIN_START;
  payload: string;
}

export interface AdminLoginSuccessAction {
  type: typeof ActionTypes.ADMIN_LOGIN_SUCCESS;
  payload: User;
}

export interface AdminLoginFailureAction {
  type: typeof ActionTypes.ADMIN_LOGIN_FAILURE;
}

export interface AdminLoginCacheStartAction {
  type: typeof ActionTypes.ADMIN_LOGIN_CACHE_START;
  payload: string;
}

export interface AdminLoginCacheSuccessAction {
  type: typeof ActionTypes.ADMIN_LOGIN_CACHE_SUCCESS;
  payload: User;
}

export interface AdminLoginCacheFailureAction {
  type: typeof ActionTypes.ADMIN_LOGIN_CACHE_FAILURE;
}

export type AdminLoginAction =
  | AdminLoginStartAction
  | AdminLoginSuccessAction
  | AdminLoginFailureAction
  | AdminLoginCacheStartAction
  | AdminLoginCacheSuccessAction
  | AdminLoginCacheFailureAction;
