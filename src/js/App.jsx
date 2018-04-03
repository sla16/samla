import React, {Component} from 'react';

import NavBar from 'js/controls/NavBar';

import github from 'images/github.png';
import 'css/App.css';

export default class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='App_content'>
        <div className='App_navBar'>
          <NavBar />
        </div>

        <div className='App_logo App_logo-main'>
        </div>

        <div id='about' className='App_about'>
        </div>

        <div id='other' className='App_logo App_logo-other'>
        </div>

        <div className='App_other'>
        </div>

        <div id='contact' className='App_contact'>
          <a href='https://github.com/sla16/samla' className='App_icon' target='_blank'><img alt='https://github.com/sla16/samla' src={github} /></a>
        </div>

        <div className='App_footer'>
        </div>
      </div>
    )
  }
}