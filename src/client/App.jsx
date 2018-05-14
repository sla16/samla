import React, {Component} from 'react';
import { connect } from 'react-redux';
import { test } from './actions/test';

import NavBar from './components/NavBar';

import github from './assets/github.png';
import './css/App.css';

class App extends Component {
  constructor (props) {
    super(props);
    window.onscroll = this.updateNavBar.bind(this);
  }

  updateNavBar() {
    var navbar = document.getElementById("navBar");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add('navBar-scrolled');
    } else {
        navbar.classList.remove('navBar-scrolled');
    }
  }

  render () {
    return (
      <div className='App_content'>
        <div className='App_navBar'>
          <NavBar />
        </div>

        <div className='App_logo App_logo-main'>
          <h1>Sam La</h1>
        </div>

        <div id='about' className='App_about'>
          <h3 className='App_header'>About Me</h3>
          <div>
            {this.props.test && this.props.test.message
            }
          </div>
        </div>

        {/* <div id='contact' className='App_contact'>
          <h3 className='App_header'>Contact</h3>
          <a href='https://github.com/sla16/samla' className='App_icon' target='_blank'><img alt='https://github.com/sla16/samla' src={github} /></a>
        </div> */}
      </div>
    )
  }
}

function mapStateToProps ({ test }) {
  return { test };
};

export default connect(mapStateToProps)(App);
