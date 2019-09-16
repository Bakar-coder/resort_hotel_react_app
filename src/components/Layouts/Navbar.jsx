import React, { Component } from 'react';
import logo from "../../images/logo.svg";
import { FaAlignRight } from  'react-icons/fa'

class Navbar extends Component{
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  };

 render() {
   return (
     <div className="navbar">

     </div>
   );
 }
}

export default Navbar;