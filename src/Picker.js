import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'

class Picker extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false,
      onMove: [],
      touch: {
        flag: false,
        y: null
      }
    }
  }

  componentDidMount(){
    //弹出效果
    setTimeout(() => {
      this.setState({ visible:true })
    },0)
    //点击关闭
    window.addEventListener('click',this.pickerOnBlur.bind(this),false)
    //初始值
    const state = this.state
    const length = this.props.content.length
    let select = this.props.target.getAttribute('data-selected')
    select = JSON.parse(select)
    for(var i = 0;i < length;i ++){
      let index
      if(select){
        index = select[i]
      }else{
        index = 0
      }
      state.onMove.push({
        onMoves: 90 - index * 36,
        transitionTime: '300ms',
        selected: index
      })
    }
    this.setState(state)
    this.valueInputHandle()
  }

  pickerOnBlur(e){
    const state = this.state
    if(!state.visible){
      return
    }
    let target = e.target
    while (target.tagName != 'BODY') {
      if(target == this.props.target || (target.className || '').indexOf('picker-columns') > -1){
        return
      }else{
        target = target.parentNode
      }
    }
    //关闭
    this.onOkHandle()
  }

  onTouchStartHandle(index,e){
    const state = this.state
    state.onMove[index].transitionTime = '0ms'
    state.touch = {
      flag: true,
      y: e.touches[0].clientY
    }
    this.setState(state)
  }

  onTouchMoveHandle(index,e){
    const state = this.state
    if(!state.touch.flag){
      return
    }
    const touches = e.touches[0]
    const dis = touches.clientY - state.touch.y
    state.onMove[index].onMoves += dis
    state.touch.y = touches.clientY
    //拉动范围
    const onMovesDis = state.onMove[index].onMoves
    const maxDis = 90 - this.props.content[index].values.length * 36
    if(onMovesDis > 126){
      state.onMove[index].onMoves = 126
    }else if (onMovesDis < maxDis) {
      state.onMove[index].onMoves = maxDis
    }
    //滑动高亮显示
    let _index = -Math.round((onMovesDis - 90) / 36)
    const maxLength = this.props.content[index].values.length
    if(_index < 0){
      _index = 0
    }else if(_index >= maxLength){
      _index = maxLength - 1
    }
    state.onMove[index].selected = _index
    this.setState(state)
    this.valueInputHandle()
  }

  onTouchEndHandle(index,e){
    const state = this.state
    state.onMove[index].transitionTime = '300ms'
    state.touch.flag = false
    this.setState(state)
    //高亮显示的内容归位
    setTimeout(() => {
      const state = this.state
      for(var i = 0;i < state.onMove.length;i ++){
        const item = state.onMove[i]
        item.onMoves = 90 - 36 * item.selected
      }
      this.setState(state)
    },0)
  }

  valueInputHandle(){
    let value = ''
    const state = this.state
    for(var i = 0;i < state.onMove.length;i ++){
      value += this.props.content[i].values[state.onMove[i].selected].text + ' '
    }
    this.props.target.value = value
  }

  onOkHandle(){
    const state = this.state
    state.visible = false
    this.setState(state)
    setTimeout(() => {
      this.props.close()
    },400)
    //关闭事件
    window.removeEventListener('click',this.pickerOnBlur.bind(this),false)
    //回调
    let ret = []
    const select = {}
    for(var i = 0;i < state.onMove.length;i ++){
      select[i] = state.onMove[i].selected
      ret.push({
        col: this.props.content[i].col,
        value: this.props.content[i].values[state.onMove[i].selected]
      })
    }
    this.props.target.setAttribute('data-selected',JSON.stringify(select))
    this.props.callBack(ret)
  }

  render () {
    const state = this.state
    const props = this.props
    const className = classnames({
      'picker-modal picker-columns  remove-on-close': true,
      'modal-in': state.visible,
      'modal-out': !state.visible
    })
    const html = this.props.content.map((item,index) => {
      const flag = state.onMove.length > index
      const onMoves = flag ? state.onMove[index].onMoves : 90
      const transitionTime = flag ? state.onMove[index].transitionTime : '300ms'
      const selected = flag ? state.onMove[index].selected : 0
      const innerHtml = (item.values || []).map((item,_index) => {
        let className = 'picker-item'
        if(_index == selected){
          className = 'picker-item picker-selected'
        }
        return (
          <div key={_index} className={className}>{item.text}</div>
        )
      })
      return (
        <div key={index} className='picker-items-col picker-items-col-center'>
          <div
            className='picker-items-col-wrapper'
            style={{transform: 'translate3d(0px, ' + onMoves + 'px, 0px)',transition:transitionTime}}
            onTouchStart={this.onTouchStartHandle.bind(this,index)}
            onTouchMove={this.onTouchMoveHandle.bind(this,index)}
            onTouchEnd={this.onTouchEndHandle.bind(this,index)}>
            {innerHtml}
          </div>
        </div>
      )
    })
    return (
      <div>
        <div className={className}>
          <header className="bar bar-nav">
            <button className="button button-link pull-right close-picker" style={{zIndex:9}} onTouchTap={this.onOkHandle.bind(this)}>确定</button>
            <h1 className="title">{props.title}</h1>
          </header>
          <div className='picker-modal-inner picker-items'>
            {html}
            <div className="picker-center-highlight"></div>
          </div>
        </div>
      </div>
    )
  }
}

let globalTarget = []

function picker(config,target,callBack){
  if(!findExist(target)){
    return
  }
  globalTarget.push(target)
  let div = document.createElement('div')
  div.id = 'react-picker'
  let handleClose = function(){
    if(!div){
      return
    }
    deleteExist(target)
    ReactDOM.unmountComponentAtNode(div)
    document.body.removeChild(div)
  }
  document.body.appendChild(div)
  let array = config.content
  if(!array instanceof Array){
    config.content = new Array[array]
  }
  ReactDOM.render(<Picker {...config} target={target} callBack={callBack} close={handleClose}/>,div)
}

function findExist(target){
  for(var i = 0;i < globalTarget.length;i ++){
    if(globalTarget[i] == target){
      return false
    }
  }
  return true
}

function deleteExist(target){
  for(var i = 0;i < globalTarget.length;i ++){
    if(globalTarget[i] == target){
      globalTarget.splice(i,1)
    }
  }
}

export default {
  picker: picker
}
