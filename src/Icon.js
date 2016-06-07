import React from 'react'
import classnames from 'classnames'

class Icon extends React.Component {
  render () {
    let {
      componet: Component,
      name,
      children,
      ...props
    } = this.props
    Component = Component || 'i'
    let iconClass = { 'icon': true }
    iconClass['icon-' + name] = true
    return (
      <Component className={classnames(iconClass)} {...props}>{children}</Component>
    )
  }
}

Icon.propTypes = {
  componet: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]),
  name: React.PropTypes.string.isRequired
}

export default Icon
