import React, { Component } from 'react';
import './App.css';
import CountdownBox from './views/countdown-box/countdown-box'
import EasterEggImages from './views/easter-egg-images/easter-egg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWinter: true,
      countdownToDate: '2017-12-08T14:00:00Z',
      numberOfClicksOnCountdown: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
        numberOfClicksOnCountdown: ++this.state.numberOfClicksOnCountdown
    });
  }

  render() {
    return (
      <div className="App">
        <EasterEggImages numberOfClick={this.state.numberOfClicksOnCountdown}/>
        <CountdownBox isWinter={this.state.isWinter} countdownToDate={this.state.countdownToDate} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
