import React, { Component } from 'react';
import './App.css';
import CountdownBox from './views/countdown-box/CountdownBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountdownBox/>
      </div>
    );
  }
}

export default App;
