import React, { Component } from 'react'
import fetchAnything from '../../utils/apiFetches/fetchAnything';
export class AsideEvents extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      error: ''
    }
  }

  async componentDidMount() {
    try {
      const url = 'https://spacelaunchnow.me/api/3.3.1/event/upcoming'
      const events = await fetchAnything(url);
      console.log(events);
    } catch(error) {
      this.setState({ error });
    }
  }
  render() {
    return (
      <aside>
        <h2>ASIDE</h2>
      </aside>
    )
  }
}

export default AsideEvents
