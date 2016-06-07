import React from 'react'

class Block extends React.Component {
  render () {
    return (
      <div className="content-block">{this.props.children}</div>
    )
  }
}

class BlockTitle extends React.Component {
  render () {
    return (
      <div className="content-block-title">{this.props.children}</div>
    )
  }
}

class Container extends React.Component {
  render () {
    return (
      <div className="content">
        {this.props.children}
      </div>
    )
  }
}

Container.propTypes = {
  blockTitle: React.PropTypes.string
}

Container.Block = Block
Container.BlockTitle = BlockTitle

export default Container
