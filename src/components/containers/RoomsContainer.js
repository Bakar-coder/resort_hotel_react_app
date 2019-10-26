import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setMaxPrice, setMinPrice } from "../../redux/actions";
import RoomsList from "../RoomsList";
import Loading from "../../images/gif/loading-arrow.gif";
import RoomsFilterContainer from "./RoomsFilterContainer";

const RoomsContainer = props => {
  const { loading } = props;
  if (loading) return <img src={Loading} alt="loading..." />;
  return (
    <div>
      <RoomsFilterContainer rooms={props.rooms} />
      <RoomsList rooms={props.sortedRooms} />
    </div>
  );
};

const mapStateToProps = state => ({
  rooms: state.roomsState,
  loading: state.roomsState.loading,
  sortedRooms: state.roomsState.sortedRooms
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setMaxPrice, setMinPrice }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomsContainer);
