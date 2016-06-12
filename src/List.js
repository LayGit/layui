import React, { Component } from 'react'
import classnames from 'classnames'

class Group extends Component {
  render () {
    return (
      <div className="list-group">
        <ul>
          <li className="list-group-title">{this.props.title}</li>
          {this.props.children}
        </ul>
      </div>
    )
  }
}

Group.propTypes = {
  title: React.PropTypes.string.isRequired
}

class Item extends Component {
  render () {
    let {
      media,
      title,
      after,
      subTitle,
      text,
      arrow,
      href,
      linkProps,
      formItem,
      linkComponent: LinkComponent,
      ...props
    } = this.props

    let hasLink = false
    linkProps = linkProps || {}

    if (!('linkComponent' in this.props))
      LinkComponent = 'div'

    if ('href' in this.props) {
      LinkComponent = 'a'
      linkProps.href = href
      hasLink = true
    }

    if ('linkProps' in this.props)
      hasLink = true

    let liClass = {
      'item-content': true,
      'item-link': arrow || hasLink
    }

    let mediaNode = null
    if ('media' in this.props)
      mediaNode = (<div className="item-media">{media}</div>)

    const titleClass = {
      'item-title': true
    }
    if ('formItem' in this.props)
      titleClass['label'] = true
    let titleNode = (<div className={classnames(titleClass)}>{title}</div>)

    let afterNode = null
    if ('after' in this.props) {
      afterNode = (<div className="item-after">{after}</div>)
    }

    let hasSubTitleOrText = false

    let subTitleNode = null
    if ('subTitle' in this.props) {
      hasSubTitleOrText = true
      subTitleNode = (<div className="item-subtitle">{subTitle}</div>)
    }

    let textNode = null
    if ('text' in this.props) {
      hasSubTitleOrText = true
      textNode = (<div className="item-text">{text}</div>)
    }

    let innerNode = (<div className="item-inner">{titleNode}{afterNode}</div>)
    if (hasSubTitleOrText)
      innerNode = (<div className="item-inner"><div className="item-title-row">{titleNode}{afterNode}</div>{subTitleNode}{textNode}</div>)
    if ('formItem' in this.props)
      innerNode = (<div className="item-inner">{titleNode}{formItem}</div>)
    return (
      <li {...props}>
        <LinkComponent className={classnames(liClass)} {...linkProps}>
          {mediaNode}
          {innerNode}
        </LinkComponent>
      </li>
    )
  }
}

Item.propTypes = {
  media: React.PropTypes.node,
  title: React.PropTypes.string,
  after: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.node]),
  subTitle: React.PropTypes.string,
  text: React.PropTypes.string,
  arrow: React.PropTypes.bool,
  href: React.PropTypes.string,
  linkProps: React.PropTypes.object,
  formItem: React.PropTypes.node
}

class List extends Component {
  render () {
    let {
      group,
      inset,
      listStyle,
      children,
      ...props
    } = this.props
    let listClass = {
      'list-block': true,
      'media-list': listStyle == 'media',
      'inset': inset
    }
    return (
      <div className={classnames(listClass)} {...props}>
        {group ? children : (<ul>{children}</ul>)}
      </div>
    )
  }
}

List.propTypes = {
  group: React.PropTypes.bool,
  inset: React.PropTypes.bool,
  listStyle: React.PropTypes.string
}

List.Item = Item
List.Group = Group

export default List
