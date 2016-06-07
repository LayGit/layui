import React, { Component } from 'react'
import classnames from 'classnames'

class Item extends Component {
  render () {
    let {
      media,
      title,
      subTitle,
      ...props
    } = this.props
    let titleNode = (<div className="item-title">{title}</div>)
    let subTitleNode = null
    if ('subTitle' in this.props) {
      titleNode = (<div className="item-title-row"><div className="item-title">{title}</div></div>)
      subTitleNode = (<div className="item-subtitle">{subTitle}</div>)
    }
    return (
      <li {...props}>
        <a href="javascript:void(0)" className="item-link item-content">
          <div className="item-media">{media}</div>
          <div className="item-inner">
            {titleNode}
            {subTitleNode}
          </div>
        </a>
      </li>
    )
  }
}

Item.propTypes = {
  media: React.PropTypes.node,
  title: React.PropTypes.string.isRequired,
  subTitle: React.PropTypes.string
}

class List extends Component {
  render () {
    return (
      <div className="list-block cards-list">
        <ul>
          {React.Children.map(this.props.children, (item, i)=>{
            return React.cloneElement(item, { inList: true })
          })}
        </ul>
      </div>
    )
  }
}

class Card extends Component {
  render () {
    let {
      header,
      children,
      footer,
      coverImage,
      facebook,
      type,
      listStyle,
      ...props
    } = this.props
    let cardClass = { 'card': true }
    let headerNode = 'header' in this.props ? (<div className="card-header">{header}</div>) : null
    let contentNode = (<div className="card-content"><div className="card-content-inner">{children}</div></div>)
    let footerNode = 'footer' in this.props ? (<div className="card-footer">{footer}</div>) : null
    if (typeof(footer) === 'array') {
      footerNode = (
        <div className="card-footer">
          { React.Children.map(footer, (item, i)=>{
            return item
          })}
        </div>
      )
    }

    if ('coverImage' in this.props) {
      headerNode = (
        <div valign="bottom" className="card-header color-white no-border no-padding">
          <img className='card-cover' src={coverImage} alt="" />
        </div>
      )
    }

    if ('facebook' in this.props) {
      headerNode = (
        <div className="card-header no-border">
          <div className="facebook-avatar">
            <img src={facebook.avatar} width="34" height="34" />
          </div>
          <div className="facebook-name">{facebook.name}</div>
          <div className="facebook-date">{facebook.date}</div>
        </div>
      )
      contentNode = (<div className="card-content">{children}</div>)
      cardClass['facebook-card'] = true
    }

    if (type == 'list') {
      const listClass = classnames({
        'list-block': true,
        'media-list': listStyle == 'media'
      })
      contentNode = (<div className="card-content"><div className={listClass}><ul>{children}</ul></div></div>)
    }

    cardClass = classnames(cardClass)
    return (
      this.props.inList ?
      <li className={cardClass} {...props}>
        {headerNode}
        {contentNode}
        {footerNode}
      </li> : 
      <div className={cardClass} {...props}>
        {headerNode}
        {contentNode}
        {footerNode}
      </div>
    )
  }
}

Card.propTypes = {
  header: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.node]),
  footer: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.node, React.PropTypes.array]),
  coverImage: React.PropTypes.string,
  facebook: React.PropTypes.object,
  type: React.PropTypes.string,
  listStyle: React.PropTypes.string
}

Card.Item = Item
Card.List = List

export default Card
