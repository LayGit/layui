import React, { Component } from 'react'
import classnames from 'classnames'

class Item extends Component {
  render () {
    let {
      title,
      href,
      linkProps,
      actived,
      icon,
      badge,
      linkComponent: LinkComponent,
      ...props
    } = this.props
    LinkComponent = LinkComponent || 'a'
    linkProps = linkProps || {}

    if ('href' in this.props && !linkProps.href)
      linkProps.href = href

    let textNode = title
    let badgeNode = null
    if ('icon' in this.props) {
      textNode = (<span className="tab-label">{title}</span>)
      if ('badge' in this.props) {
        badgeNode = (<span className="badge">{badge}</span>)
      }
    }

    let linkComponentClass = {
      'tab-item': true,
      'external': true,
      'active': actived
    }

    return (
      <LinkComponent className={classnames(linkComponentClass)} {...linkProps}>
        {icon}
        {textNode}
        {badgeNode}
      </LinkComponent>
    )
  }
}

Item.propTypes = {
  title: React.PropTypes.string.isRequired,
  href: React.PropTypes.string,
  linkProps: React.PropTypes.object,
  actived: React.PropTypes.bool,
  icon: React.PropTypes.node,
  badge: React.PropTypes.number
}

class ToolBar extends Component {
  render () {
    const activeIndex = this.props.activeIndex
    return (
      <nav className="bar bar-tab" {...this.props}>
        {React.Children.map(this.props.children, (item, i)=>{
          return React.cloneElement(item, {actived: activeIndex == i})
        })}
      </nav>
    )
  }
}
ToolBar.propTypes = {
  activeIndex: React.PropTypes.number
}

ToolBar.Item = Item

export default ToolBar
