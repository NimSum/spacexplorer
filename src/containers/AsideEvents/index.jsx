import React, { Component } from 'react'
import fetchAnything from '../../utils/apiFetches/fetchAnything';
import { addSpaceEvents } from '../../actions';
import { connect } from 'react-redux';
import EventCard from '../../components/EventCard';

export class AsideEvents extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      error: '',
      events: []
    }
  }

  async componentDidMount() {
    try {
      const url = 'https://spacelaunchnow.me/api/3.3.1/event/upcoming'
      const events = await fetchAnything(url);
      this.props.addUpcomingEvents(events);
      this.setState({ events: events.results })
    } catch(error) {
      this.setState({ error });
    }
  }

  cardGenerator = () => {
    return this.state.events.map(event => (
      < EventCard 
        key={ event.id }
        event={ event }
      />
    ))
  }

  render() {
    return (
      <aside>
        <h2>ASIDE</h2>
        { this.cardGenerator() }
      </aside>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addUpcomingEvents: events => dispatch(addSpaceEvents(events))
})

export default connect(null, mapDispatchToProps) (AsideEvents);
