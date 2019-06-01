import React, { Component } from 'react'
import { connect } from 'react-redux'
import categoryManager from '../../thunks/categoryManager';

export class CategorySection extends Component {
  constructor() {
    super();
    this.state = {
      cardsToRender: []
    }
  }

  checkAndUpdate() {
    const categorySelected = this.props[this.props.category];
    if (categorySelected.next) {
      this.generateCards(categorySelected)
    } else this.props.selectCategory(this.props.category);
  }

  generateCards(categorySelected) {
    const cards = categorySelected.results.map(item => (
      <h2>OLAAAA</h2>
    ))
    this.setState({ cardsToRender: cards })
  }

  componentDidMount() {
    this.checkAndUpdate();
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) this.checkAndUpdate();
  }

  render() {
    return (
      <section className='category-section'>
        { this.props.category }
        { this.state.cardsToRender }
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
