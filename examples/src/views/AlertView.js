import React from 'react'
import { Alert } from 'layui'

export default class AlertView extends React.Component {
  alerthandle(){
    Alert.show({
      type: 'alert',
      title: '标题',
      content: '内容',
      onOk:() => {
        Alert.close()
      }
    })
  }
  render () {
    return (
      <div>
        <p onTouchTap={this.alerthandle.bind(this)}>alert 窗口</p>
      </div>
    )
  }
}

module.exports = exports['default']
