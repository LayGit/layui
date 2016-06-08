import React from 'react'
import { NavBar, Container, ActionSheet } from 'layui'

export default class ActionSheetView extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      visible:false,
      onCancel:null
    }
  }
  action1(){
    this.setState({visible:false})
    //alert(1)
  }

  action2(){
    this.setState({visible:false})
    //alert(2)
  }

  showActionSheet(){
    const state = this.state
    state.visible = !state.visible
    state.onCancel = () => {
      this.setState({visible:false})
    }
    this.setState(state)
  }

  render () {
    const actionList = [
      {
        text:'卖出',
        color:'#ff0000',
        onTouchTap:() => {
          this.action1()
        }
      },
      {
        text:'买入',
        onTouchTap:() => {
          this.action2()
        }
      }
    ]
    return (
      <div>
        <NavBar title="操作表" />
        <Container>
          <p onTouchTap={this.showActionSheet.bind(this)}>操作</p>
        </Container>
        <ActionSheet
          title='请选择'
          actionList={actionList}
          visible={this.state.visible}
          onCancel={this.state.onCancel}/>
      </div>
    )
  }
}
module.exports = exports['default']
