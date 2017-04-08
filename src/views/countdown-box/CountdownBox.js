import React, { Component } from 'react';
import './CountdownBox.css';
import MiregoLogo from '../../images/mirego.png'
import Ticker from '../countdown-ticker/ticker'

class CountdownBox extends Component {
  render() {
    return (
      <div className="countdown-box">
        <img className="countdown-image" src={MiregoLogo} alt="Logo de Mirego"/>
        <div className="countdown-title">Our summerfest is in</div>
        <Ticker/>
        <div className="countdown-call-to-action">BE PREPARED!</div>
      </div>
    );
  }
}

export default CountdownBox;
