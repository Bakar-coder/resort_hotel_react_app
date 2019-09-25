import React, {Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {movies, genres} from './actions';

class App extends Component {
  componentDidMount() {
    this.setState({
      movies, genres
    })
  }

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <h3>App</h3>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.genres.genres,
  movies: state.movies.movies
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({movies, genres}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);