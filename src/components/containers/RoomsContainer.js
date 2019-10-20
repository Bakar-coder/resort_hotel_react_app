import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setMaxPrice, setMinPrice } from '../../redux/actions'
import RoomsList from "../RoomsList";
import FilterRooms from "../FilterRooms";

class RoomsContainer extends Component {

  componentDidMount() {
    console.log(this.props.rooms);
  }


  render() {

    return (
      <div>
        <FilterRooms rooms={this.props.rooms}/>
        <RoomsList rooms={this.props.sortedRooms}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.roomsState.rooms,
  sortedRooms: state.roomsState.sortedRooms
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({setMaxPrice, setMinPrice}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);