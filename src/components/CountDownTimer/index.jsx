import React, { Component } from 'react'
import { setInterval } from 'timers';

export class CountDownTimer extends Component {

  constructor() {
    super();
    this.state = {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
      totalTime: ''
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
    days = Math.round(totalTime / 86400000);
    totalTime = totalTime % 8640000;
    hours = Math.round(totalTime / 3600000);
    totalTime = totalTime % 3600000;
    minutes = Math.floor(totalTime / 60000); 
    totalTime = totalTime % 60000;
    seconds = Math.round(totalTime/1000);
    this.setState({ days, hours, minutes, seconds })
  }
  
  componentDidMount() {
    const datee = new Date('2019-07-03T15:45:00Z');
    const totalTime = (datee.getTime() - Date.now());
    this.setState({ totalTime }, () => this.updateTime());
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
