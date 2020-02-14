// import utils

// import models
import * as Model from "models/contactFormModel";

export const submitContactForm = (data: Model.ContactFormType) => {
  try {
    const url = process.env.REACT_APP_SLACK_WEBHOOK_URL
      ? process.env.REACT_APP_SLACK_WEBHOOK_URL
      : "";

    const content = {
      text: "From katsuomi.com",
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "katsuomi.comより、お問い合わせがありました。"
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Name: ${data.name}`
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Email: ${data.email}`
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Content: ${data.content}`
          }
        }
      ]
    };
    const xml = new XMLHttpRequest();
    xml.open("POST", url, false);
    xml.setRequestHeader(
      "content-type",
      "application/x-www-form-urlencoded;charset=UTF-8"
    );
    xml.send(`payload=${JSON.stringify(content)}`);

    const success = { success: "200 ok, success" };
    return { success };
  } catch (error) {
    return { error };
  }
};
