import React, { Component } from 'react'
import { setInterval } from 'timers';

export class CountDownTimer extends Component {

  constructor() {
    super();
    this.state = {
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    }
  }

  updateTime() {
    setInterval(
      () => {
        this.setState({ seconds: this.state.seconds + 1 });
      },
      1000
  );
  }

  calculateCountdown(totalSeconds) {
    let totalSecondsCopy = totalSeconds;
    let days = Math.round(totalSecondsCopy / 86400000);
    totalSecondsCopy = totalSecondsCopy % 8640000;
    let hours = Math.round(totalSecondsCopy / 3600000);
    totalSecondsCopy = totalSecondsCopy % 3600000;
    let minutes = Math.round(totalSecondsCopy / 60000); 
    totalSecondsCopy = totalSecondsCopy % 60000;
    let seconds = Math.round(totalSecondsCopy/1000);
    this.setState({ days, hours, minutes, seconds }, this.updateTime())
  }
  
  componentDidMount() {
    const datee = new Date('2019-07-03T15:45:00Z');
    this.calculateCountdown(datee.getTime() - Date.now())
  }

  render() {
    return (
      <div>
        <p>{ this.state.days }</p>
        <p>{ this.state.hours }</p>
        <p>{ this.state.minutes }</p>
        <p>{ this.state.seconds }</p>
      </div>
    )
  }
}

export default CountDownTimer
