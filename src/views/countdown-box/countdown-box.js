import React, { Component } from 'react';
import './countdown-box.css';

import SummerLogo from './logo-summerfest.png'
import MiregoLogo from './logo-mirego.png'
import WinterLogo from './logo-winterfest.png'
import Ticker from '../countdown-ticker/ticker'
import BigMirego from './mirego.png'

class CountdownBox extends Component {
  render() {
    const logo = this.props.isWinter ? WinterLogo: SummerLogo;
    return (
      <div className="countdown-box">
        <img className="countdown-image" src={BigMirego} alt="Logo de Mirego"/>
        
        <img className="countdown-image" src={logo} alt="Summerfest things"/>
        <div className="countdown-title">Le Summerfest est dans</div>
        <Ticker countDownToDate={this.props.countdownToDate}/>
        <img className="countdown-image" src={MiregoLogo} alt="ClickMe" onClick={this.props.onClick}/>
      </div>
    );
  }
}

export default CountdownBox;
