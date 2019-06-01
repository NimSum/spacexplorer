import React, { Component } from 'react'
import { connect } from 'react-redux'
import categoryManager from '../../thunks/categoryManager';
import RocketCard from '../../components/RocketCard';
import AstronautCard from '../../components/AstronautCard';

export class CategorySection extends Component {
  constructor() {
    super();
    this.state = {
      cardsToRender: [],
      cardInfoToRender: {},
      showCardInfo: false
    }
  }

  checkAndUpdate() {
    const categorySelected = this.props[this.props.category];
    if (categorySelected.next) {
      this.generateCards(categorySelected)
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
        return < RocketCard rocket={item} />;
      case 'space_stations':
          return <p>space stations</p>
      case 'orbiters':
        return <p>orbiters</p>
      case 'astronauts':
        return < AstronautCard astronaut={item} />;
      default:
        return <p>NADA</p>
    }
  }

  showInfo = (card, bool) => {
    this.setState({ showCardInfo: card, showInfo: bool })
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
