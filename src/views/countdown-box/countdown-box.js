import React, { Component } from 'react';
import './countdown-box.css';

import SummerLogo from './mirego.png'
import MiregoLogo from './logo-mirego.png'
import WinterLogo from './logo-winterfest.png'
import Ticker from '../countdown-ticker/ticker'

class CountdownBox extends Component {
  render() {
    const logo = this.props.isWinter ? WinterLogo: SummerLogo;
    return (
      <div className="countdown-box">
        <img className="countdown-image" src={logo} alt="Logo de Mirego"/>
        <Ticker countDownToDate={this.props.countdownToDate}/>
        <img className="countdown-image" src={MiregoLogo} alt="ClickMe" onClick={this.props.onClick}/>
      </div>
    );
  }
}

export default CountdownBox;
