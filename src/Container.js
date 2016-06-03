import React from 'react'

class Block extends React.Component {
  render () {
    return (
      <div className="content-block">{this.props.children}</div>
    )
  }
}

class Container extends React.Component {
  render () {
    return (
      <div className="content">{this.props.children}</div>
    )
  }
}

Container.Block = Block

export default Container
