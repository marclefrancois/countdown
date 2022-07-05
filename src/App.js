import React, { Component } from 'react';
import './App.css';
import CountdownBox from './views/countdown-box/countdown-box'
import EasterEggImages from './views/easter-egg-images/easter-egg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWinter: false,
      countdownToDate: '2022-07-15T13:00:00Z',
      numberOfClicksOnCountdown: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  resetClick() {
    this.setState({
      numberOfClicksOnCountdown: 0
    });
  }

  handleClick(event) {
    this.setState({
      numberOfClicksOnCountdown: ++this.state.numberOfClicksOnCountdown
    });
    event.stopPropagation();
  }

  render() {
    return (
      <div className="App" onClick={this.resetClick}>
        <EasterEggImages numberOfClick={this.state.numberOfClicksOnCountdown} />
        <CountdownBox isWinter={this.state.isWinter} countdownToDate={this.state.countdownToDate} onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
