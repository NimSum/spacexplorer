import React, { Component } from 'react'

export class index extends Component {

  constructor() {
    super();
    this.state = {
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    }
  }
  
  componentDidMount() {
    const datee = new Date('2019-07-02T11:00:00Z');
    const seconds = Math.round((datee.getTime() - Date.now()) / 100);
    this.setState({ seconds })
  }

  render() {
    return (
      <div>
        <p>{ this.state.days }</p>
        <p>{ this.state.hours }</p>
        <p>{ this.state.mins }</p>
        <p>{ this.state.seconds }</p>
      </div>
    )
  }
}

export default index
