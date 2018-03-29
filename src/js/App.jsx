import React, {Component} from 'react';

import NavBar from 'js/controls/NavBar';
import 'css/App.css';

export default class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='content'>
        <NavBar />
      </div>
    )
  }
}