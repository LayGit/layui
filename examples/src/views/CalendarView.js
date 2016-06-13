import React from 'react'
import { NavBar, Container, calendar } from 'layui'

export default class CalendarView extends React.Component {
  calendarHandle(e){
    const date = new Date()
    calendar.showCalendar(date, e.target, (obj)=>{
      console.log(obj)
    })
  }
  render () {
    return (
      <div>
        <NavBar title="日历" />
        <Container>
          <span>日期：</span>
          <input placeholder='请选择日期' onClick={this.calendarHandle.bind(this)} readOnly></input>
        </Container>
      </div>
    )
  }
}
module.exports = exports['default']
