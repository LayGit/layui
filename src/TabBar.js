import React, { Component } from 'react'
import classnames from 'classnames'

class Item extends Component {
  render () {
    return (
      <div></div>
    )
  }
}

Item.propTypes = {
  title: React.PropTypes.string
}

class TabBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeIndex: this.props.defActiveIndex || 0
    }
  }

  handleTabTap(i) {
    this.setState({ activeIndex: i })
  }

  render () {
    const tabLinks = []
    const tabs = []
    React.Children.map(this.props.children, (item, i)=>{
      const tabLinkClass = classnames({
        'tab-link': true,
        'active': this.state.activeIndex == i,
        'button': true
      })
      const tabClass = classnames({
        'tab': true,
        'active': this.state.activeIndex == i
      })
      tabLinks.push(<a key={i} href="javascript:void(0)" className={tabLinkClass} onTouchTap={this.handleTabTap.bind(this, i)}>{item.props.title}</a>)
      tabs.push(<div className={tabClass} key={i}>{item.props.children}</div>)
    })

    return (
      <div>
        <div className={this.props.uiStyle == 'hollow' ? 'buttons-row' : 'buttons-tab'}>
          {tabLinks}
        </div>
        <div className="tabs">
          {tabs}
        </div>
      </div>
    )
  }
}

TabBar.propTypes = {
  defActiveIndex: React.PropTypes.number,
  uiStyle: React.PropTypes.string
}

TabBar.Item = Item

export default TabBar
