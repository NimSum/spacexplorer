import React, { Component } from 'react'

export class App extends Component {
  async componentDidMount() {
    const testFetch = await fetch('https://cors-anywhere.herokuapp.com/https://spacelaunchnow.me/api/3.3.1/astronaut/617/')
    console.log(testFetch.json());
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App

