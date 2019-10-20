import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import Styled from '../components/Styled'
import { getRoom } from '../redux/actions'
import defaultBcg from '../images/room-3.jpeg'
import Hero from "../components/Hero";
import Banner from "../components/Banner";

class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultBcg
  };

  componentDidMount() {
    this.props.getRoom(this.state.slug)
  }

  render() {
    const room = this.props.singleRoom;
    console.log(room);
    if (!room) return <div className='error'>
      <h3>No such room found...</h3>
      <Link to='/rooms' className='btn-primary'>Back To Rooms</Link>
    </div>;

    const { name, capacity, description, price, size, extras, breakfast, pets, images } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <div>
        <Styled.StyledHero image={mainImg || this.state.defaultBcg} >
          <Banner title={`${name} Room`}>
            <Link to='/rooms' className='btn-primary'>BacK To Rooms</Link>
          </Banner>
        </Styled.StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {
              defaultImg.map((image, index) => <img src={image} key={index} alt={name}/>)
            }
          </div>
        </section>
        <section className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>Price: ${price}</h6>
            <h6>Size: {size} sQFT</h6>
            <h6>Max Capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
            <h6> {pets  ? 'Pets Allowed' : 'No pets allowed'}</h6>
            <h6> {breakfast && 'Free breakfast'}</h6>
          </article>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {
              extras.map((item, index) => <li key={index}>* {item}</li>)
            }
          </ul>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  rooms: state.roomsState.rooms,
  singleRoom: state.roomsState.singleRoom
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getRoom}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleRoom);