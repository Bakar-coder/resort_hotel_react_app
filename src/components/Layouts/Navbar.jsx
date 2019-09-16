import React, { Component } from 'react';
import { FaAlignRight } from  'react-icons/fa'
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import { handleToggle } from '../../actions'

class Navbar extends Component{
  componentDidMount() {
    this.setState({
      isOpen: this.props.data.navToggle
    })
  }

  render(){
    console.log(this.state);
    return (
      <div className="navbar">
        <FaAlignRight />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({handleToggle}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);