import React, { Component } from 'react'

class Col extends Component {
  render () {
    const colClass = 'col-' + this.props.span
    return (
      <div className={colClass}>{this.props.children}</div>
    )
  }
}

class Grid extends Component {
  render () {
    return (
      <div className="row">
        {this.props.children}
      </div>
    )
  }
}

Grid.Col = Col

export default Grid
