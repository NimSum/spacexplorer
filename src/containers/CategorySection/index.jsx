import React, { Component } from 'react'
import { connect } from 'react-redux'
import categoryManager from '../../thunks/categoryManager';

export class CategorySection extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
  }
  
  componentDidUpdate(prevProps) {
    console.log(prevProps.category !== this.props.category)
    console.log('hi')
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
  spaceStations: state.spaceStations,
  orbiters: state.orbiters,
  astronauts: state.astronauts,
  launchProviders: state.launchProviders
})

const mapDispatchToProps = dispatch => ({
  selectCategory: category => dispatch(categoryManager(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategorySection)
