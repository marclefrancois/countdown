import React, { Component } from 'react';
import './countdown-box.css';
import MiregoLogo from '../../images/mirego.png'
import Ticker from '../countdown-ticker/ticker'

class CountdownBox extends Component {
  render() {
    return (
      <div className="countdown-box">
        <img className="countdown-image" src={MiregoLogo} alt="Logo de Mirego"/>
        <div className="countdown-title">Notre Winterfest est dans</div>
        <Ticker countDownToDate='2017-12-08T14:00:00Z'/>
        <div className="countdown-title">Are you stoked ?</div>
      </div>
    );
  }
}

export default CountdownBox;
