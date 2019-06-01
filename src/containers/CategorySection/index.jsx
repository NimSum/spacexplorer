import React, { Component } from 'react'
import { connect } from 'react-redux'
import categoryManager from '../../thunks/categoryManager';

export class CategorySection extends Component {
  constructor() {
    super();
    this.state = {
      renderedCards: []
    }
  }

  checkAndUpdate() {
    const categorySelectedArray = this.props[this.props.category];
    if (categorySelectedArray.next) this.generateCards();
  }



  componentDidMount() {
    this.checkAndUpdate();
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.category !== this.props.category) this.checkAndUpdate();
  }

  render() {
    return (
      <section className='category-section'>
        { this.props.category }
        { this.state.renderedCards }
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
