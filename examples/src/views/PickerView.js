import React from 'react'
import { NavBar, Container, picker } from 'layui'

export default class PickerView extends React.Component {
  pickerHandle(e){
    const datas = [{
      text: 'iphone4',
      value: 4
    },{
      text: 'iphone5',
      value: 5
    },{
      text: 'iphone6',
      value: 6
    },{
      text: '小米1',
      value: 7
    },{
      text: '小米2',
      value: 8
    },{
      text: '小米3',
      value: 9
    }]

    picker.picker({
      title: '请选择手机',
      content: [{
        col: '手机型号',
        values: datas
      }]
    },e.target,(obj) => {
      console.log(obj)
    })
  }

  pickerNameHandle(e){
    const datas1 = [
      {
        text: '赵',
        value: 0
      },
      {
        text: '钱',
        value: 1
      },{
        text: '孙',
        value: 2
      },{
        text: '李',
        value: 3
      }
    ]
    const datas2 = [
      {
        text: '小三',
        value: 3
      },{
        text: '小四',
        value: 4
      },{
        text: '小五',
        value: 5
      },{
        text: '小六',
        value: 6
      }
    ]
    const datas3 = [
      {
        text: '先生',
        value: 1
      },{
        text: '小姐',
        value: 2
      }
    ]
    picker.picker({
      title: '请选择称呼',
      content: [{
        col: '姓',
        values: datas1
      },{
        col: '名',
        values: datas2
      },{
        col: '称呼',
        values: datas3
      }]
    },e.target,(obj) => {
      console.log(obj)
    })
  }
  render () {
    return (
      <div>
        <NavBar title="picker" />
        <Container>
          <div style={{margin:20}}>
            <span>手机</span>
            <input placeholder='手机' onClick={this.pickerHandle.bind(this)} readOnly></input>
          </div>
          <div style={{margin:20}}>
            <span>称呼</span>
            <input placeholder='称呼' onClick={this.pickerNameHandle.bind(this)} readOnly></input>
          </div>
        </Container>
      </div>
    )
  }
}
module.exports = exports['default']
