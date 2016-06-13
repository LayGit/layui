import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'

class DateMonthContent extends Component{
  getMontDaysLength(year,month){
    if(month == 12){
      year ++
      month = 1
    }else{
      month ++
    }
    const nextMonthFirstDay = new Date(year + '/' + month + '/1')
    const days = new Date(nextMonthFirstDay.getTime() - 1000 * 24 * 60 * 60).getDate()
    return days
  }

  getLastMonthDetail(year,month){
    if(month == 1){
      year --
      month == 12
    }
    return this.getMontDaysLength(year,month)
  }

  getDayInChinese(year,month,date){
    const time = new Date(year + '-' + month + '-' + date)
    const day = time.getDay()
    return day == 0 ? 7 : day
  }

  getXMoves(){
    let moves = - parseFloat(this.props.moves)
    const oldMoves = - this.props.oldMoves
    if(moves % 100 != 0){
      moves = oldMoves
    }
    switch (this.props.position) {
      case -1:
        return -100 + moves + '%'
      case 0:
        return moves + '%'
      case 1:
        return 100 + moves + '%'
    }
  }

  dateSelectHandle(item){
    this.props.onSelect(this.props.year,item.month,item.value)
  }

  render(){
    const props = this.props
    const calendarClass = classnames({
      'picker-calendar-month': true,
      'picker-calendar-month-prev': props.position == -1,
      'picker-calendar-month-current': props.position == 0,
      'picker-calendar-month-next': props.position == 1
    })
    const xMoves = this.getXMoves()
    const year = props.year
    const month = props.month
    //本月第一天，最后一天，本月长度
    const firstDayWeek = this.getDayInChinese(year,month,1)
    const days = this.getMontDaysLength(year,month)
    const lastDayWeek = this.getDayInChinese(year,month,days)
    //上个月最后一天
    const lastMonthDays = this.getLastMonthDetail(year,month)
    const htmlList = []
    for(var row = 1;row <= 6;row ++){
      var list = []
      for(var i = 1;i <= 7;i ++){
        var index = (row - 1) * 7 + i
        //判断是否是这个月内的，
        if(index < firstDayWeek){
          var valueMonth = month - 1
          var valueDay = lastMonthDays + index - firstDayWeek
          var className = 'picker-calendar-day picker-calendar-day-prev picker-calendar-day-weekend'
        }else if(index > days + firstDayWeek - 1){
          var valueMonth = month + 1
          var valueDay = index - days
          var className = 'picker-calendar-day picker-calendar-day-next picker-calendar-day-weekend'
        }else{
          var valueMonth = month
          var valueDay = index - firstDayWeek + 1
          var className = 'picker-calendar-day'
        }
        list.push({
          value: valueDay,
          className: className,
          month: valueMonth
        })
      }
      htmlList.push(list)
    }
    const html = htmlList.map((item,index) => {
      const everyHtml = item.map((item,index) => {
        const sYear = props.select.getFullYear()
        const sMonth = props.select.getMonth() + 1
        const day = props.select.getDate()
        let className = item.className
        if(sYear == props.year && day == item.value && item.month == sMonth){
          className += ' picker-calendar-day-selected'
        }
        return (
          <div key={index} className={className} onTouchTap={this.dateSelectHandle.bind(this,item)}>
            <span>{item.value}</span>
          </div>
        )
      })
      return (
        <div key={index} className="picker-calendar-row" style={{height:40}}>
          {everyHtml}
        </div>
      )
    })
    return(
      <div className={calendarClass} style={{transform:'translate3d(' + xMoves + ', 0%, 0px)'}}>
        {html}
      </div>
    )
  }
}

class Calendar extends Component {
  constructor(props){
    super(props)
    this.state = {
      initFlag: false,
      visible: false,
      year: '',
      month: '',
      select: new Date(),
      xMoves:'0%',
      xMovesOld:'0%',
      transitionTime:'300ms',
      touchMove: {
        flag:false,
        x:null,
        y:null
      }
    }
  }

  componentDidMount(){
    //设置年月
    const state = this.state
    const date = this.props.default
    state.year = date.getFullYear()
    state.month = date.getMonth()
    state.select = date
    this.setState(state)
    //关闭日历
    window.addEventListener('click',this.calendarOnBlur.bind(this),false)
    //弹出效果
    const time = setTimeout(() => {
      this.setState({ initFlag : true, visible : true})
    },0)
    //回调事件
    this.props.callBack(this.props.default)
  }

  calendarOnBlur(e){
    const state = this.state
    if(!state.visible){
      return
    }
    let target = (e || window.event).target
    while (target.tagName != 'BODY') {
      if((target.className || '').indexOf('picker-modal') > -1 || target == this.props.target){
        return
      }else{
        target = target.parentNode
      }
    }
    this.setState({ visible : false })
    setTimeout(() => {
      this.props.closeFn()
    }.bind(this),400)
    //关闭事件
    window.removeEventListener('click',this.calendarOnBlur.bind(this),false)
  }

  getMonthInChinese(month){
    const monthList = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    return monthList[month]
  }

  monthPrev(){
    const state = this.state
    const moves = this.getXmovesInteger()
    state.xMoves = moves + 100 + '%'
    if(state.month == 0){
      state.year --
      state.month = 11
    }else{
      state.month --
    }
    state.xMovesOld = state.xMoves
    this.setState(state)
  }

  monthNext(){
    const state = this.state
    const moves = this.getXmovesInteger()
    state.xMoves = moves - 100 + '%'
    if(state.month == 11){
      state.year ++
      state.month = 0
    }else{
      state.month ++
    }
    state.xMovesOld = state.xMoves
    this.setState(state)
  }

  yearPrev(){
    const state = this.state
    const moves = this.getXmovesInteger()
    state.xMoves = moves + 100 + '%'
    state.year --
    state.xMovesOld = state.xMoves
    this.setState(state)
  }

  yearNext(){
    const state = this.state
    const moves = this.getXmovesInteger()
    state.xMoves = moves - 100 + '%'
    state.year ++
    state.xMovesOld = state.xMoves
    this.setState(state)
  }

  onTouchStartHandle(e){
    e.preventDefault()
    const state = this.state
    state.touchMove = {
      flag : true,
      x : e.touches[0].clientX,
      y : e.touches[0].clientY
    }
    state.xMovesOld = state.xMoves
    this.setState(state)
  }

  getXmovesInteger(){
    return parseFloat(this.state.xMovesOld)
  }

  onTouchMoveHandle(e){
    e.preventDefault()
    const state = this.state
    if(!state.touchMove.flag){
      return
    }
    const touches = e.touches[0]
    const xValues = touches.clientX - state.touchMove.x
    const width = document.body.scrollWidth
    const percent = ( xValues / width ) * 100
    if(xValues != 0){
      state.xMoves = parseFloat(state.xMovesOld) + percent + '%'
      state.transitionTime = '0ms'
    }
    this.setState(state)
  }

  onTouchEndHandle(e){
    e.preventDefault()
    const state = this.state
    state.touchMove.flag = false
    //判断移动后续处理页面
    const xMoves = parseFloat(state.xMoves) - parseFloat(state.xMovesOld)
    if(xMoves > 50){
      this.monthPrev()
    }else if(xMoves < -50){
      this.monthNext()
    }else{
      state.xMoves = state.xMovesOld
    }
    state.transitionTime = '300ms'
    this.setState(state)
  }

  dateSelect(year,month,day){
    const state = this.state
    const date = new Date(year + '/' + month + '/' + day)
    state.select = date
    state.visible = false
    this.setState(state)
    this.props.target.value = year + '-' + month + '-' + day
    setTimeout(() => {
      this.props.closeFn()
    }.bind(this),400)
    //关闭事件
    window.removeEventListener('click',this.calendarOnBlur.bind(this),false)
    //回调
    this.props.callBack(this.state.select)
  }

  render () {
    const modalClass = classnames({
      'picker-modal picker-calendar  remove-on-close' : true,
      'modal-in' : this.state.initFlag && this.state.visible,
      'modal-out' : this.state.initFlag && !this.state.visible
    })
    return (
      <div className={modalClass}>
        <div className='toolBar'>
          <div className='toolbar-inner'>
            <div className="picker-calendar-month-picker">
              <a href="javascript:void(0)" className="link icon-only picker-calendar-prev-month" onTouchTap={this.monthPrev.bind(this)}>
                <i className="icon icon-prev"></i>
              </a>
              <div className="current-month-value">{this.getMonthInChinese(this.state.month)}</div>
              <a href="javascript:void(0)" className="link icon-only picker-calendar-next-month" onTouchTap={this.monthNext.bind(this)}>
                <i className="icon icon-next"></i>
              </a>
            </div>
            <div className="picker-calendar-year-picker">
              <a href="javascript:void(0)" className="link icon-only picker-calendar-prev-year" onTouchTap={this.yearPrev.bind(this)}>
                <i className="icon icon-prev"></i>
              </a>
              <span className="current-year-value">{this.state.year}</span>
              <a href="javascript:void(0)" className="link icon-only picker-calendar-next-year" onTouchTap={this.yearNext.bind(this)}>
                <i className="icon icon-next"></i>
              </a>
            </div>
          </div>
        </div>
        <div className='picker-modal-inner'>
          <div className="picker-calendar-week-days">
            <div className="picker-calendar-week-day "> 周一</div>
            <div className="picker-calendar-week-day "> 周二</div>
            <div className="picker-calendar-week-day "> 周三</div>
            <div className="picker-calendar-week-day "> 周四</div>
            <div className="picker-calendar-week-day "> 周五</div>
            <div className="picker-calendar-week-day picker-calendar-week-day-weekend"> 周六</div>
            <div className="picker-calendar-week-day picker-calendar-week-day-weekend"> 周日</div>
          </div>
          <div className='picker-calendar-months' onTouchStart={this.onTouchStartHandle.bind(this)} onTouchMove={this.onTouchMoveHandle.bind(this)} onTouchEnd={this.onTouchEndHandle.bind(this)}>
            <div className='picker-calendar-months-wrapper' style={{transform:'translate3d(' + this.state.xMoves + ', 0%, 0px)',transitionDuration:this.state.transitionTime}}>
              <DateMonthContent year={this.state.year} month={this.state.month} select={this.state.select} position={-1} moves={this.state.xMoves} oldMoves={this.state.xMovesOld} onSelect={this.dateSelect.bind(this)}/>
              <DateMonthContent year={this.state.year} month={this.state.month + 1} select={this.state.select} position={0} moves={this.state.xMoves} oldMoves={this.state.xMovesOld} onSelect={this.dateSelect.bind(this)}/>
              <DateMonthContent year={this.state.year} month={this.state.month + 2} select={this.state.select} position={1} moves={this.state.xMoves} oldMoves={this.state.xMovesOld} onSelect={this.dateSelect.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function showCalendarComponent(date,target,callBack){
  if(document.getElementById('react-calendar')){
    return
  }
  let div = document.createElement('div')
  div.id = 'react-calendar'
  let handleClose = function(){
    if(!div){
      return
    }
    ReactDOM.unmountComponentAtNode(div)
    document.body.removeChild(div)
  }
  document.body.appendChild(div)
  ReactDOM.render(<Calendar default={date} callBack={callBack} target={target} closeFn={handleClose}/>,div)
}

const calendar = {
  showCalendar(date = new Date(),target,callBack){
    if(target.value){
      date = new Date((target.value).replace(/-/g,'/'))
    }
    if(date instanceof Date){
      showCalendarComponent(date,target,callBack)
    }
  }
}

export default calendar
