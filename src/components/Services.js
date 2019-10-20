import React, {Component} from 'react';
import Title from "./Title";
import { FaCocktail, FaShuttleVan, FaHiking, FaBeer } from 'react-icons/fa';
class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail/>,
        title: 'free cocktails',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, necessitatibus'
      },
      {
        icon: <FaHiking/>,
        title: 'Endless Hiking',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, necessitatibus'
      },
      {
        icon: <FaShuttleVan/>,
        title: 'Free Shuttle',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, necessitatibus'
      },
      {
        icon: <FaBeer/>,
        title: 'Strongest Beer',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, necessitatibus'
      },

    ]
  };

  render() {
    return (
      <section className='services'>
        <Title title='Services'/>
        <div className="services-center">
          {
            this.state.services.map((item, index) => <article key={index} className='service'>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>)
          }
        </div>
      </section>
    );
  }
}

export default Services;