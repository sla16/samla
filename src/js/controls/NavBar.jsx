import React, {Component} from 'react';

import 'css/controls/NavBar.css';

export default class NavBar extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='navBar'>
        <a href='#' className='navOption'>Home</a>
        <a href='#about' className='navOption'>About</a>
        <a href='#other' className='navOption'>Other</a>
        <a href='#contact' className='navOption'>Contact</a>
      </div>
    )
  }
}