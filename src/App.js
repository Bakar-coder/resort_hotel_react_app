import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRooms, setFeatured, setMinPrice, setMaxPrice } from './redux/actions';
import Layout from "./components/Layouts/Layout";
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import PageNotFound from "./pages/Error";

class App extends Component {

  componentDidMount() {
    this.props.getRooms();
    this.props.setFeatured();
    this.props.setMinPrice();
    this.props.setMaxPrice();
  }

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/rooms' component={Rooms}/>
            <Route exact path='/rooms/:slug' component={SingleRoom}/>
            <Route component={PageNotFound}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.roomsState
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getRooms, setFeatured, setMinPrice, setMaxPrice}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);