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
        <div className="countdown-title">Notre Summerfest est dans</div>
        <Ticker/>
        <Flotation/>
      </div>
    );
  }
}

export default CountdownBox;
