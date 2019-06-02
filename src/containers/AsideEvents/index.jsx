import React, { Component } from 'react'
import fetchAnything from '../../utils/apiFetches/fetchAnything';
import { addSpaceEvents } from '../../actions';
import { connect } from 'react-redux';
import EventCard from '../../components/EventCard';
import PropTypes from 'prop-types';

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
        <h1>SPACE<span>X</span>PLORER</h1>
        <h3 className="aside-label">Space Related Events:</h3>
        { this.cardGenerator() }
        <footer>
          <p>Copyright 2019 SPACEXPLORER</p>
          <a href="https://spacelaunchnow.me/api/3.3.0/">Space Launch Now Api</a>
        </footer>
      </aside>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addUpcomingEvents: events => dispatch(addSpaceEvents(events))
})

AsideEvents.propTypes = {
  addUpcomingEvents: PropTypes.func
}

export default connect(null, mapDispatchToProps) (AsideEvents);
