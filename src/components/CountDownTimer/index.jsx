import React, { Component } from 'react'
import { setInterval } from 'timers';

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
    const datee = new Date('2019-07-03T15:45:00Z');
    const totalTime = (datee.getTime() - Date.now());
    this.setState({ totalTime }, () => this.updateTime());
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <section>
        <div>
          <p>{ days < 10 ? `0${days}` : days }</p>
        </div>
        <div>
          <p>{ hours < 10 ? `0${hours}` : hours }</p>
        </div>
        <div>
          <p>{ minutes < 10 ? `0${minutes}`: minutes }</p>
        </div>
        <div>
          <p>{ seconds < 10 ? `0${seconds}` : seconds }</p>
        </div>
      </section>
    )
  }
}

export default CountDownTimer
