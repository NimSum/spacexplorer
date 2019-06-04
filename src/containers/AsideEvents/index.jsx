import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetchAnything from '../../utils/apiFetches/fetchAnything';
import apiUrls from '../../utils/apiFetches/apiUrls';
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
      const events = await fetchAnything(apiUrls.upcomingEvents);
      this.props.addUpcomingEvents(events);
      this.setState({ events: events.results })
    } catch(error) {
      this.setState({ error: error.message });
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
        <Link to='/'>
          <h1>SPACE<span>X</span>PLORER</h1>
        </Link>
        <h3 className='aside-label'>Space Related Events:</h3>
        <div className='card-container'>
          { this.cardGenerator() }
        </div>
        <footer>
          <p>Copyright 2019 SPACEXPLORER</p>
          <a href='https://spacelaunchnow.me/api/3.3.0/'>Space Launch Now Api</a>
        </footer>
      </aside>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addUpcomingEvents: events => dispatch(addSpaceEvents(events))
})

AsideEvents.propTypes = {
  addUpcomingEvents: PropTypes.func
}

export default connect(null, mapDispatchToProps) (AsideEvents);
