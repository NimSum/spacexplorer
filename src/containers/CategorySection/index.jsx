import React, { Component } from 'react'
import { connect } from 'react-redux'
import categoryManager from '../../thunks/categoryManager';

export class CategorySection extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props[this.props.category])
  }
  
  componentDidUpdate(prevProps) {
    console.log(prevProps.category !== this.props.category)
    console.log('hi')
    console.log(this.props[this.props.category])
  }

  render() {
    return (
      <section className='category-section'>
        { this.props.category }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  rockets: state.rockets,
  space_stations: state.spaceStations,
  orbiters: state.orbiters,
  astronauts: state.astronauts,
  launch_providers: state.launchProviders
})

const mapDispatchToProps = dispatch => ({
  selectCategory: category => dispatch(categoryManager(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategorySection)
