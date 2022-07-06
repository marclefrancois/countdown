import React, { Component } from 'react';
import './countdown-box.css';

import SummerLogo from './logo-summerfest.png'
import WinterLogo from './logo-winterfest.png'
import Ticker from '../countdown-ticker/ticker'
import CallToAction from '../flotation-call-to-action/flotation'

class CountdownBox extends Component {
  render() {
    const logo = this.props.isWinter ? WinterLogo: SummerLogo;
    return (
      <div className="countdown-box">
        <img className="countdown-title-image" src={logo} alt="Summerfest things"/>
        <div className="countdown-title">Ton Summerfest est dans:</div>
        <Ticker countDownToDate={this.props.countdownToDate}/>
        <CallToAction onClickItem={this.props.onClick} />
      </div>
    );
  }
}

export default CountdownBox;
