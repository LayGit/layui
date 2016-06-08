import React from 'react'
import { NavBar, Container, calendar } from 'layui'

export default class CalendarView extends React.Component {
  calendarHandle(){
    const date = new Date()
    calendar.showCalendar(date, (obj)=>{

    })
  }
  render () {
    return (
      <div>
        <NavBar title="日历" />
        <Container>
          <span>日期：</span>
          <input placeholder='请选择日期' onFocus={this.calendarHandle.bind(this)}/>
        </Container>
      </div>
    )
  }
}
module.exports = exports['default']
