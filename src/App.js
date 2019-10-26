import React from "react";

import Layout from "./components/Layouts/Layout";
import { Switch, Route } from "react-router-dom";
import AppContainer from "./components/containers/AppContainer";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import PageNotFound from "./pages/Error";

const App = () => {
  return (
    <AppContainer>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </AppContainer>
  );
};

export default App;
