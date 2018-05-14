import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { test } from './../actions/test';

import '../css/components/NavBar.css';

const mapStateToProps = (state, ownProps) => {
  return { test: state.test.test };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(test())
  }
};

const NavBar = ({ onClick, test }) => {
  return (
    <div className='navBarContainer'>
      <div id='navBar' className='navBar'>
        <a href='#' className='navOption' onClick={onClick}>Home</a>
        {/* <a href='#contact' className='navOption'>Contact</a> */}
      </div>
    </div>
  )
};

NavBar.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);