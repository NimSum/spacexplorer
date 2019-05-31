import React, { Component } from 'react'

export class CategoryMenu extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    }
  }

  generateMenu() {
    return (
      <nav>

      </nav>
    )
  }

  render() {
    return (
      <div>
        <p>Xplore Space</p>
      </div>
    )
  }
}

export default CategoryMenu
