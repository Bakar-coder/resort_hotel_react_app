import React from "react";
import FilterRooms from "../FilterRooms";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const RoomsFilterContainer = props => {
  const { rooms, type } = props;
  console.log(rooms);
  return (
    <div>
      <FilterRooms rooms={rooms} type={type} />
    </div>
  );
};

const mapState = state => ({
  rooms: state.roomsState.rooms,
  type: state.roomsState.type
});
const mapDispatch = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapState,
  mapDispatch
)(RoomsFilterContainer);
