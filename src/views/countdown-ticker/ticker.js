import React, { Component } from 'react';
import moment from 'moment'
import _countdown from 'moment-countdown'
import countdown from 'countdown'
import './ticker.css';

class Ticker extends Component {
  constructor() {
    super();
    this.countDownToDate = new Date('2017-06-22T15:00:00Z');
    this.state = {
      countdown: this._getCurrentCountDown()
    };
  }

  _getCurrentCountDown() {
    return moment(this.countDownToDate).countdown(new Date(), countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS, NaN, 0);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      countdown: this._getCurrentCountDown()
    });
  }

  render() {
    return (
      <div className="ticker">
        {this.state.countdown.toString()}
      </div>
    );
  }
}

export default Ticker;
