// import models
import { FlashMessageState } from "models/flashMessagesModel";
import { AdminLoginState } from "models/adminLoginModel";
import { ContactFormState } from "models/contactFormModel";
import { ArticleState } from "models/articleModel";

export interface AppState {
  flashMessages: FlashMessageState;
  adminLogin: AdminLoginState;
  contactForm: ContactFormState;
  article: ArticleState;
}
