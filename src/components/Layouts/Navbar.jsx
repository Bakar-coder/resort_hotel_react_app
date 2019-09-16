import React, { useState } from 'react';
import { FaAlignRight } from  'react-icons/fa'
import logo from '../../images/logo.svg'
import {Link} from "react-router-dom";

const Navbar = (props) => {
  const [state, setSate] = useState({
    isOpen : false
  });
  const {isOpen} = state;

  const onToggle = () => {
    setSate({
      isOpen: !isOpen
    })
  };

  const navLinksClasses = "nav-links ";

  return (
      <div className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Logo"/>
            </Link>
            <button type="button" className="nav-btn" >
              <FaAlignRight className="nav-icon" onClick={onToggle} />
            </button>
          </div>
        </div>
        <ul className={isOpen ? navLinksClasses + "show-nav" : navLinksClasses }>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rooms">Rooms</Link></li>
        </ul>
      </div>
    )
};



export default Navbar;