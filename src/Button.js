import React from 'react'
import classnames from 'classnames'

class Group extends React.Component {
  render () {
    const activeIndex = this.props.activeIndex
    const buttons = React.Children.map(this.props.children, (item, i)=>{
      return activeIndex == i ? React.cloneElement(item, { active: true }) : item
    })
    return (
      <p className="buttons-row">{buttons}</p>
    )
  }
}

Group.propTypes = {
  activeIndex: React.PropTypes.number
}

class Button extends React.Component {
  render () {
    let {
      href,
      uiStyle,
      disabled,
      component: Component,
      children,
      ...props
    } = this.props
    Component = Component || 'a'
    href = href || 'javascript:void(0)'

    const classSet = {
      'button': true
    }
    if (uiStyle)
      classSet['button-' + uiStyle] = true
    classSet['button-big'] = !!this.props.uiBig
    classSet['button-round'] = !!this.props.uiRound
    classSet['button-fill'] = !!this.props.uiFill

    classSet.disabled = !!this.props.disabled
    classSet.active = !!this.props.active

    const classes = classnames(classSet)

    return (
      <Component
        {...props}
        href={href}
        className={classes}
      >
        {children}
      </Component>
    )
  }
}

Button.Group = Group

Button.propTypes = {
  href: React.PropTypes.string,
  target: React.PropTypes.string,
  uiStyle: React.PropTypes.string,
  uiRound: React.PropTypes.bool,
  uiBig: React.PropTypes.bool,
  uiFill: React.PropTypes.bool,
  component: React.PropTypes.node,
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
}

export default Button
