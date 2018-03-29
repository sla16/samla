import React, {Component} from 'react';

import github from 'images/github.png';
import 'css/controls/NavBar.css';

export default class NavBar extends Component {
  constructor (props) {
    super(props);
    console.log(github);
  }

  render () {
    return (
      <div className='navBar'>
        <a href='#' className='navOption'>HOME</a>
        <a href='#' className='navOption navIcon'><img alt='GitHub' src={github} /></a>
      </div>
    )
  }
}