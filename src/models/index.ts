// import models
import { FlashMessageState } from "models/flashMessagesModel";
import { AdminLoginState } from "models/adminLoginModel";
import { ContactFormState } from "models/contactFormModel";
import { ArticleState } from "models/articleModel";
import { TagState } from "models/tagModel";

export interface AppState {
  flashMessages: FlashMessageState;
  adminLogin: AdminLoginState;
  contactForm: ContactFormState;
  article: ArticleState;
  tag: TagState;
}
