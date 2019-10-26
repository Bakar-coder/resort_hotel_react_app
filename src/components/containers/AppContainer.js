import React, { Fragment, useEffect } from "react";
import { bindActionCreators } from "redux";
import {
  getRooms,
  setFeatured,
  setMaxPrice,
  setMaxSize,
  setMinPrice
} from "../../redux/actions";
import { connect } from "react-redux";

const AppContainer = props => {
  const { getRooms, setFeatured, setMaxPrice, setMaxSize } = props;

  useEffect(() => {
    getRooms();
    setFeatured();
    setMaxPrice();
    setMaxSize();
  }, [getRooms, setFeatured, setMaxPrice, setMaxSize]);

  return <Fragment>{props.children}</Fragment>;
};

const mapStateToProps = state => ({
  rooms: state.roomsState
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getRooms,
      setFeatured,
      setMinPrice,
      setMaxPrice,
      setMaxSize
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
