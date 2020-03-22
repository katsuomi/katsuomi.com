/**
 *
 * adminLoginMethods
 *
 */

import * as Model from "models/adminLoginModel";

export const isAdmin = (user: Model.User): boolean => {
  return user.email === process.env.REACT_APP_ADMIN_EMAIL;
};
