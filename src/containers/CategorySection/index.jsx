import React, { Component } from 'react'
import { connect } from 'react-redux'
import categoryManager from '../../thunks/categoryManager';
import RocketCard from '../../components/RocketCard';
import AstronautCard from '../../components/AstronautCard';
import CategoryItemInfo from '../../components/CategoryItemInfo';
import PropTypes from 'prop-types';

export class CategorySection extends Component {
  constructor() {
    super();
    this.state = {
      cardsToRender: [],
      cardInfoToRender: {},
      showInfo: false
    }
  }

  checkAndUpdate() {
    this.setState({ showInfo: false })
    const categorySelected = this.props[this.props.category];
    if (categorySelected.next) {
      const randomItem = Math.floor(Math.random() * 19);
      this.generateCards(categorySelected)
      this.setState({ cardInfoToRender: categorySelected.results[randomItem] })
    } else this.props.selectCategory(this.props.category);
  }

  generateCards(categorySelected) {
    const cards = categorySelected.results.map(item => 
      this.cardSelector(item)
    )
    this.setState({ cardsToRender: cards })
  }

  cardSelector(item) {
    switch (this.props.category) {
      case 'rockets':
        return (< RocketCard 
          rocket={item} showInfo={ this.showInfo } key={item.id} />);
      case 'space_stations':
          return <p>space stations</p>
      case 'orbiters':
        return <p>orbiters</p>
      case 'astronauts':
        return (< AstronautCard 
          astronaut={item} showInfo={ this.showInfo } key={item.id} />);
      default:
        return <p>NADA</p>
    }
  }

  showInfo = (card, bool) => {
    this.setState({ cardInfoToRender: card, showInfo: bool })
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
        < CategoryItemInfo 
          item={ this.state.cardInfoToRender }
          category={ this.props.category }
          showInfo={ this.showInfo } />
        <div className="card-container">
          { this.state.cardsToRender }
        </div>
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

CategorySection.propTypes = {
  astronauts: PropTypes.object,
  category: PropTypes.string,
  launch_providers: PropTypes.object,
  orbiters: PropTypes.object,
  rockets: PropTypes.object,
  selectCategory: PropTypes.func,
  space_stations: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySection)
