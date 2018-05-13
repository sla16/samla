import React, {Component} from 'react';

import '../css/controls/NavBar.css';

export default class NavBar extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='navBarContainer'>
        <div id='navBar' className='navBar'>
          <a href='#' className='navOption'>Home</a>
          <a href='#about' className='navOption'>About Me</a>
          <a href='#other' className='navOption'>Other</a>
          <a href='#contact' className='navOption'>Contact</a>
        </div>
      </div>
    )
  }
}