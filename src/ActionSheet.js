import React, { Component } from 'react'
import classnames from 'classnames'

class ActionSheet extends Component {
  constructor(props){
    super(props)
    this.state = {
      init:false
    }
  }
  
  actionList(index){
    this.props.actionList[index].onTouchTap()
  }

  onCancel(){
    const state = this.state
    if(!state.init){
      this.setState({init:true})
    }
    this.props.onCancel ? this.props.onCancel() : void 0
  }
  render () {
    const props = this.props
    const actionList = props.actionList || []
    const listHtml = actionList.map((item,index) => {
      const fontColor = item.color || '#5f646e'
      return (
        <span key={index} className='actions-modal-button' style={{color:fontColor}} onTouchTap={this.actionList.bind(this,index)}>{item.text}</span>
      )
    })
    const bodyStyle = this.state.init?{} : {opacity:0}
    const classModal = props.visible?'modal-overlay  modal-overlay-visible' : 'modal-overlay'
    const classAction = props.visible?'actions-modal modal-in' : 'actions-modal modal-out'
    const overlayClass = classnames({
      'modal-overlay': true,
      'modal-overlay-visible': props.visible
    })
    const modalClass = classnames({
      'actions-modal': true,
      'modal-in': props.visible,
      'modal-out': !props.visible && this.state.init
    })
    return (
      <div>
        <div className={overlayClass}></div>
        <div className={modalClass}>
          <div className='actions-modal-group'>
            <span className='actions-modal-label'>{props.title}</span>
            {listHtml}
          </div>
          <div className="actions-modal-group">
            <span className="actions-modal-button bg-danger" style={{background:'#f6383a',color:'#fff'}} onTouchTap={this.onCancel.bind(this)}>取消</span>
          </div>
        </div>
      </div>
    )
  }
}

ActionSheet.propTypes = {
  title: React.PropTypes.string,
  visible: React.PropTypes.bool,
  onCancel: React.PropTypes.func,
  actionList: React.PropTypes.array
}

export default ActionSheet
