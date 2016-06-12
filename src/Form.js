import React, { Component } from 'react'
import classnames from 'classnames'
import List from './List'
const ListItem = List.Item

class Item extends Component {
  render () {
    const formItem = (<div className="item-input">{this.props.children}</div>)
    const itemClass = {
      'align-top': this.props.alignTop
    }
    return (
      <ListItem {...this.props}
      formItem={formItem}
      className={classnames(itemClass)} />
    )
  }
}

class Form extends Component {
  render () {
    return (
      <List {...this.props}>
        {this.props.children}
      </List>
    )
  }
}

Form.Item = Item

export default Form
