import React, { Component }  from 'react';
import './easter-egg.css';
import MiregoMtl from './images/winter/mirego-mtl.jpg'
import Bath from './images/winter/winterfest-bath.jpg'
import Waitresses from './images/winter/waitresses.jpg'
import AfterParty from './images/winter/winterfest2017.jpg'
import Team from './images/summer/summerfest.jpg'

class EasterEgg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    }
  }

  getImage() {
    if (this.props.numberOfClick >= 90) {
        return AfterParty;
    } else if (this.props.numberOfClick >= 50) {
        return Bath;
    } else if (this.props.numberOfClick >= 30) {
        return Waitresses;
    } else if (this.props.numberOfClick >= 10) {
      return MiregoMtl;
    } else {
      return Team;
    }
  }

  render() {
    return (
      <div>
        <img src={this.getImage()} className="easter-egg-image" alt=""/>
      </div>
    );
  }
}

export default EasterEgg;
