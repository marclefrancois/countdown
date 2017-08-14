import React, { Component } from 'react';
import './countdown-box.css';
import MiregoLogo from '../../images/mirego.png'
import Ticker from '../countdown-ticker/ticker'
import Flotation from '../flotation-call-to-action/flotation'

class CountdownBox extends Component {
  render() {
    return (
      <div className="countdown-box">
        <img className="countdown-image" src={MiregoLogo} alt="Logo de Mirego"/>
        <div className="countdown-title">Notre Winterfest est dans</div>
        <Ticker countDownToDate='2017-12-22T16:00:00Z'/>
      </div>
    );
  }
}

export default CountdownBox;
