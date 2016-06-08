import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'

class DateMonthContent extends Component{
  getMontDaysLength(year,month){
    if(month == 12){
      year ++
      month = 1
    }
    const nextMonthFirstDay = new Date(year + '-' + month + '-1')
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

  render(){
    const props = this.props
    const calendarClass = classnames({
      'picker-calendar-month': true,
      'picker-calendar-month-prev': props.position == -1,
      'picker-calendar-month-current': props.position == 0,
      'picker-calendar-month-next': props.position == 1
    })
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
          var valueDay = lastMonthDays + index - firstDayWeek
          var className = 'picker-calendar-day picker-calendar-day-prev picker-calendar-day-weekend'
        }else if(index > days){
          var valueDay = index - days
          var className = 'picker-calendar-day picker-calendar-day-prev picker-calendar-day-weekend'
        }else{
          var valueDay = index - firstDayWeek + 1
          var className = 'picker-calendar-day'
        }
        list.push({
          value: valueDay,
          className: className
        })
      }
      htmlList.push(list)
    }
    const html = htmlList.map((item,index) => {
      const everyHtml = item.map((item,index) => {
        return (
          <div key={index} className={item.className}>
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
      <div className={calendarClass}>
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
      month: ''
    }
  }

  componentDidMount(){
    //设置年月
    const state = this.state
    const date = this.props.default
    state.year = date.getFullYear()
    state.month = date.getMonth()
    this.setState(state)
    //关闭日历
    window.addEventListener('click',this.calendarOnBlur.bind(this),false)
    //弹出效果
    const time = setTimeout(() => {
      this.setState({ initFlag : true, visible : true})
    },0)
    //回调事件
    this.props.callBack(this.props.date)
  }

  calendarOnBlur(e){
    const state = this.state
    if(!state.visible){
      return
    }
    let target = (e || window.event).target
    while (target.tagName != 'BODY') {
      if((target.className || '').indexOf('picker-modal') > -1){
        return
      }else{
        target = target.parentNode
      }
    }
    this.setState({ visible : false })
    const time = setTimeout(closeCalendarComponent,400)
  }

  getMonthInChinese(month){
    const monthList = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    return monthList[month]
  }

  monthPrev(){
    const state = this.state
    if(state.month == 0){
      state.year --
      state.month = 11
    }else{
      state.month --
    }
    this.setState(state)
  }

  monthNext(){
    const state = this.state
    if(state.month == 11){
      state.year ++
      state.month = 0
    }else{
      state.month ++
    }
    this.setState(state)
  }

  yearPrev(){
    const state = this.state
    state.year --
    this.setState(state)
  }

  yearNext(){
    const state = this.state
    state.year ++
    this.setState(state)
  }

  render () {
    const modalClass = classnames({
      'picker-modal picker-calendar  remove-on-close' : true,
      'modal-in' : this.state.initFlag && this.state.visible,
      'modal-out' : !this.state.visible
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
          <div className='picker-calendar-months'>
            <div className='picker-calendar-months-wrapper'>
              <DateMonthContent year={this.state.year} month={this.state.month} position={-1}/>
              <DateMonthContent year={this.state.year} month={this.state.month + 1} position={0}/>
              <DateMonthContent year={this.state.year} month={this.state.month + 2} position={1}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function showCalendarComponent(date,callBack){
  if(document.getElementById('react-calendar')){
    return
  }
  let div = document.createElement('div')
  div.id = 'react-calendar'
  document.body.appendChild(div)
  ReactDOM.render(<Calendar default={new Date()} callBack={callBack}/>,div)
}

function closeCalendarComponent(){
  let div = document.getElementById('react-calendar')
  if(!div){
    return
  }
  document.body.removeChild(div)
}

const calendar = {
  showCalendar(date = new Date(),callBack){
    if(date instanceof Date){
      showCalendarComponent(date,callBack)
    }
  },
  closeCalendar(){
    closeCalendarComponent()
  }
}

export default calendar
