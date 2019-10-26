import React, { Component } from "react";
import { connect } from "react-redux";
import Title from "./Title";
import loadingImg from "../images/gif/loading-arrow.gif";
import Room from "./Room";

class FeaturedRooms extends Component {
  render() {
    const featuredRooms = this.props.featured;
    return featuredRooms.length > 0 ? (
      <section className="featured-rooms">
        <Title title="Featured" />
        <div className="featured-rooms-center">
          {featuredRooms.map(room => (
            <Room key={room.id} room={room} />
          ))}
        </div>
      </section>
    ) : (
      <img src={loadingImg} alt="loading..." className="loading" />
    );
  }
}

const mapStateToProps = state => ({
  featured: state.roomsState.featuredRooms
});

export default connect(
  mapStateToProps,
  null
)(FeaturedRooms);
