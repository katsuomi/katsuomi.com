import React, { FC } from "react";
import { Helmet } from "react-helmet";

// import utils
import pages from "utils/pages";

// import components
import AdminContainer from "containers/AdminContainer";

const Admin: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{pages.admin.title}</title>
    </Helmet>
    <AdminContainer />
  </>
);

export default Admin;
