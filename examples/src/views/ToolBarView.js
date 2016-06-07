import React from 'react'
import { Container, ToolBar, Icon } from 'layui'
const ToolBarItem = ToolBar.Item

export default class ToolBarView extends React.Component {
  render () {
    return (
      <div>
        <Container></Container>
        <ToolBar activeIndex={0}>
          <ToolBarItem icon={<Icon name="home" componet="span" />} title="文案"></ToolBarItem>
          <ToolBarItem icon={<Icon name="me" componet="span" />} title="文案" badge={2}></ToolBarItem>
          <ToolBarItem icon={<Icon name="star" componet="span" />} title="文案"></ToolBarItem>
          <ToolBarItem icon={<Icon name="cart" componet="span" />} title="文案"></ToolBarItem>
          <ToolBarItem icon={<Icon name="settings" componet="span" />} title="文案"></ToolBarItem>
        </ToolBar>
      </div>
    )
  }
}
module.exports = exports['default']
