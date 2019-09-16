import React, {Component, Fragment} from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import Rooms from "./components/pages/Rooms";
import SingleRoom from "./components/pages/SingleRoom";
import PageNotFound from "./components/pages/404";
import Navbar from "./components/Layouts/Navbar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/rooms" component={Rooms}/>
          <Route exact path="/rooms/:slug" component={SingleRoom}/>
         <Route component={PageNotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;