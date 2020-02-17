import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";
import styled from "styled-components";

// import components
import Header from "components/organisms/Header";
// import utils
import pages from "utils/pages";
import * as breakPoints from "utils/breakPoints";

import * as routes from "routes";

const Wrapper = styled.div`
  margin-right: ${breakPoints.isIPhone5s() ? "-19px" : "0"};
`;

const App: FC = () => (
  <>
    <Wrapper>
      <Header />
      <Switch>
        <Route path={pages.home.path} component={routes.Home} exact />
        <Route path={pages.admin.path} component={routes.Admin} exact />
        <Route
          path={pages.adminCreateArticle.path}
          component={routes.AdminCreateArticle}
          exact
        />
        <Route path={pages.contact.path} component={routes.Contact} exact />
        <Route path={pages.profile.path} component={routes.Profile} exact />
        <Route path={pages.news.path} component={routes.News} exact />
        <Route path={pages.awards.path} component={routes.Awards} exact />
        <Route path={pages.products.path} component={routes.Products} exact />
        <Redirect to="/" />
      </Switch>
    </Wrapper>
  </>
);

export default App;
