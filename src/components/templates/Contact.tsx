import React, { FC } from "react";
import { Helmet } from "react-helmet";

// import utils
import pages from "utils/pages";

// import components
import ContactForm from "components/organisms/ContactForm";

const Contact: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{pages.contact.title}</title>
    </Helmet>
    <ContactForm />
  </>
);

export default Contact;
