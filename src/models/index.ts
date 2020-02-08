// import models
import { FlashMessageState } from "models/flashMessagesModel";
import { AdminLoginState } from "models/adminLoginModel";

export interface AppState {
  flashMessages: FlashMessageState;
  adminLogin: AdminLoginState;
}
