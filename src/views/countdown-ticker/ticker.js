import React, { Component } from 'react';
import moment from 'moment'
import _countdown from 'moment-countdown'
import countdown from 'countdown'
import './ticker.css';

class Ticker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countdown: ''
    }
    this._configureCountdownLocale();
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this._tick(),
      1000
    );

    this.setState({
      countdown: this._getCurrentCountDown()
    });
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
    let date = new Date(this.props.countDownToDate)
    return moment(date).countdown(new Date(), countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS, NaN, 0);
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
