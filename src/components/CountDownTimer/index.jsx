import React, { Component } from 'react'
import { setInterval } from 'timers';
import PropTypes from 'prop-types';

export class CountDownTimer extends Component {

  constructor() {
    super();
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalTime: 0
    }
  }

  updateTime() {
    setInterval(
      () => {
        this.setState({ 
          totalTime: this.state.totalTime - 1000
          }, () => this.calculateCountdown(this.state.totalTime));
      },
      1000
  );
  }

  calculateCountdown() {
    let { days, hours, minutes, seconds, totalTime } = this.state;
    days = Math.floor(totalTime / 86400000);
    totalTime = totalTime % 8640000;
    hours = Math.floor(totalTime / 3600000);
    totalTime = totalTime % 3600000;
    minutes = Math.floor(totalTime / 60000); 
    totalTime = totalTime % 60000;
    seconds = Math.floor(totalTime/1000);
    this.setState({ days, hours, minutes, seconds })
  }
  
  componentDidMount() {
    const totalTime = this.calculateDateDifference();
    this.setState({ totalTime }, () => this.updateTime());
  }

  calculateDateDifference() {
    const nextDate = new Date(this.props.date);
    return (nextDate.getTime() - Date.now());
  }

  componentDidUpdate(prevProps) {
    if(this.props.date !== prevProps.date) {
      const totalTime = this.calculateDateDifference();
      this.setState({ totalTime })
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <section className="countdown-timer">
        <div>
          <p>{ days < 10 ? `0${days}` : days }</p>
          <span>Days</span>
        </div>
        <span className="colon">:</span>
        <div>
          <p>{ hours < 10 ? `0${hours}` : hours }</p>
          <span>Hours</span>
        </div>
        <span className="colon">:</span>
        <div>
          <p>{ minutes < 10 ? `0${minutes}`: minutes }</p>
          <span>Minutes</span>
        </div>
        <span className="colon">:</span>
        <div>
          <p>{ seconds < 10 ? `0${seconds}` : seconds }</p>
          <span>Seconds</span>
        </div>
      </section>
    )
  }
}

CountDownTimer.propTypes = {
  date: PropTypes.string
}

export default CountDownTimer
