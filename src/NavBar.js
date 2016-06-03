import React, { Component } from 'react'

class NavBar extends Component {
  render () {
    const title = typeof(this.props.title) === 'string' ? (<h1 className="title">{this.props.title}</h1>) : null
    const left = this.props.left ? (<div className="pull-left">{this.props.left}</div>) : null
    const right = this.props.right ? (<div className="pull-right">{this.props.right}</div>) : null
    return (
      <header className="bar bar-nav">
        {left}
        {right}
        {title}
      </header>
    )
  }
}

export default NavBar
