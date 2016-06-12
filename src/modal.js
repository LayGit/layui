import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anim: {
        overlay: false,
        modalIn: false,
        modalOut: false,
      },
      marginTop: 0
    }
  }

  componentDidMount () {
    setTimeout(()=>{
      const state = this.state
      state.anim.overlay = true
      state.anim.modalIn = true
      this.setState(state)
    }, 1);

    this.props.regEvent((cb)=>{
      this.setState({
        anim: {
          overlay: false,
          modalIn: false,
          modalOut: true,
        }
      })
      setTimeout(function () {
        cb()
      }, 400);
    })

    this.setState({
      marginTop: - Math.round(this.refs.modal.offsetHeight / 2)
    })
  }

  render () {
    const overlayClass = {
      'modal-overlay': true,
      'modal-overlay-visible': this.state.anim.overlay
    }
    const modalClass = {
      'modal': true,
      'modal-no-buttons': this.props.noButton,
      'modal-in': this.state.anim.modalIn,
      'modal-out': this.state.anim.modalOut
    }

    return (
      <div className={classnames(overlayClass)}>
        <div className={classnames(modalClass)} ref="modal" style={{ display: 'block', marginTop: this.state.marginTop }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

function modal(config) {
  let div = document.createElement('div')
  document.body.appendChild(div)

  let d, handleClose

  function close() {
    handleClose(function(){
      ReactDOM.unmountComponentAtNode(div);
      div.parentNode.removeChild(div);
    })
  }

  function regEvent(fn) {
    handleClose = fn
  }

  let titleNode = config.title ? (<div className="modal-title">{config.title}</div>) : null
  let textNode = config.text ? (<div className="modal-text">{config.text}</div>) : null
  let afterTextNode = config.afterText ? config.afterText : null

  let inner = (
    <div className="modal-inner">
      {titleNode}
      {textNode}
      {afterTextNode}
    </div>)

  let buttons = null
  const buttonsClass = {
    'modal-buttons': true,
    'modal-buttons-vertical': !!config.verticalButtons
  }
  if (config.buttons && config.buttons.length > 0) {
    buttons = (
      <div className={classnames(buttonsClass)}>
        {config.buttons.map((button, i)=>{
          const buttonClass = {
            'modal-button': true,
            'modal-button-bold': !!button.bold
          }
          function handleTap () {
            let fn = button.callback
            if (fn) {
              let ret
              if (fn.length) {
                ret = fn(close)
              } else {
                ret = fn()
                if (!ret)
                  close()
              }
              if (ret && ret.then)
                ret.then(close)
            } else {
              close()
            }
          }
          return (<span key={i} className={classnames(buttonClass)} onTouchTap={handleTap}>{button.text}</span>)
        })}
      </div>
    )
  }

  ReactDOM.render(
    <Modal regEvent={regEvent} noButton={!config.buttons || config.buttons.length == 0}>{inner}{buttons}</Modal>,
    div,
    function () {
      d = this
    }
  )

  return close
}

function prompt(text, title, callbackOk, callbackCancel) {
  if (typeof title === 'function') {
      callbackCancel = arguments[2];
      callbackOk = arguments[1];
      title = undefined;
  }
  let inputVal = ''
  function onChange(e) {
    inputVal = e.target.value
  }

  modal({
      text: text || '',
      title: title,
      afterText: <input type="text" onChange={onChange} className="modal-text-input" />,
      buttons: [
        {
          text: '取消',
          callback: callbackCancel ? function(){
            return callbackCancel(inputVal)
          } : callbackCancel
        },
        {
          text: '确定',
          bold: true,
          callback: callbackOk ? function(){
            return callbackOk(inputVal)
          } : callbackOk
        }
      ]
  })
}

function confirm(text, title, callbackOk, callbackCancel) {
  if (typeof title === 'function') {
    callbackCancel = arguments[2];
    callbackOk = arguments[1];
    title = undefined;
  }
  modal({
    text: text || '',
    title: title,
    buttons: [
      {text: '取消', callback: callbackCancel},
      {text: '确定', bold: true, callback: callbackOk}
    ]
  })
}

function alert(text, title, callbackOk) {
  if (typeof title === 'function') {
    callbackOk = arguments[1];
    title = undefined;
  }
  modal({
    text: text || '',
    title: title,
    buttons: [ {text: '确定', bold: true, callback: callbackOk} ]
  })
}

let modalLoadingClose = ()=>{}
function showLoading(title) {
  hideLoading()
  modalLoadingClose = modal({
    title: title || '正在加载',
    text: <div className="preloader"></div>
  })
}

function hideLoading() {
  modalLoadingClose()
}

export default {
  alert: alert,
  confirm: confirm,
  prompt: prompt,
  show: modal,
  showLoading: showLoading,
  hideLoading: hideLoading
}
