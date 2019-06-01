import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CategorySection extends Component {
  constructor() {
    super();
    this.state = {}
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <section className='category-section'>
        
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

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySection)
