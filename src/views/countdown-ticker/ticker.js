import React, { Component } from 'react';
import moment from 'moment'
import _countdown from 'moment-countdown'
import countdown from 'countdown'
import './ticker.css';

class Ticker extends Component {

  countDownToDate = new Date('2017-06-22T15:00:00Z')

  state = {
    countdown: this._getCurrentCountDown()
  }

  constructor() {
    super();
    this._configureCountdownLocale();
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this._tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  _tick() {
    this.setState({
      countdown: this._getCurrentCountDown()
    });
  }

  _getCurrentCountDown() {
    return moment(this.countDownToDate).countdown(new Date(), countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS, NaN, 0);
  }

  _configureCountdownLocale() {
    countdown.setLabels(
      ' milliseconde| seconde| minute| heure| jour| semaine| mois| année| décennie| siècle| millénaire',
      ' millisecondes| secondes| minutes| heures| jours| semaines| mois| années| décennies| siècles| millénaires',
      ' et ',
      ', ',
      'maintenant');
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
