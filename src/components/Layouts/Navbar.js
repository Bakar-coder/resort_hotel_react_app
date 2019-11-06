import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    isOpen: false
  };

  onChange = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <div className='logo'>
                <h3>
                  <span>Resort</span> Hotel
                </h3>
              </div>
            </Link>
            <button type='button' className='nav-btn' onClick={this.onChange}>
              <FaAlignRight className='nav-icon' />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/rooms'>Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
