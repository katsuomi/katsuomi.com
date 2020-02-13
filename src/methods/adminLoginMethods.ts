/**
 *
 * adminLoginMethod
 *
 */

import * as Model from "models/adminLoginModel";

export const isAdmin = (user: Model.User) => {
  if (user.email === process.env.REACT_APP_ADMIN_EMAIL) {
    return true;
  }
  return false;
};
