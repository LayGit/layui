import React from 'react'
import { NavBar, Container, Button } from 'layui'
const ButtonGroup = Button.Group
const ContainerBlock = Container.Block

export default class ButtonView extends React.Component {
  handleTap (e) {
    e.preventDefault()
    alert('Tapped!')
  }

  render () {
    return (
      <div>
        <NavBar title="按钮" />
        <Container>
          <ContainerBlock>
            <p><Button onTouchTap={this.handleTap.bind(this)}>Usual Button 1</Button></p>
            <p><Button uiStyle="light">light button</Button></p>
            <p><Button uiStyle="dark">dark button</Button></p>
            <p><Button uiStyle="success">success button</Button></p>
            <p><Button uiStyle="danger">danger button</Button></p>
            <p><Button uiStyle="warning">warning button</Button></p>
            <p><Button disabled={true}>disabled button</Button></p>
            <p><Button uiRound={true}>Round Button 1</Button></p>
            <p><Button uiBig={true}>Big Button</Button></p>
            <p><Button uiBig={true} uiRound={true}>Big Round Button</Button></p>
            <ButtonGroup>
              <Button>Button 1</Button>
              <Button>Button 2</Button>
              <Button>Button 3</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button active={true}>Button 1</Button>
              <Button>Button 2</Button>
              <Button>Button 3</Button>
            </ButtonGroup>
            <ButtonGroup activeIndex={1}>
              <Button>Button 1</Button>
              <Button>Button 2</Button>
              <Button>Button 3</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button uiRound={true}>Button 1</Button>
              <Button uiRound={true}>Button 2</Button>
            </ButtonGroup>
            <ButtonGroup activeIndex={1}>
              <Button uiRound={true}>Button 1</Button>
              <Button uiRound={true}>Button 2</Button>
            </ButtonGroup>
            <p><Button uiFill={true}>Fill Button</Button></p>
            <p><Button uiFill={true} uiStyle="success">Fill Button</Button></p>
            <p><Button uiFill={true} uiStyle="danger">Fill Button</Button></p>
            <p><Button uiFill={true} uiStyle="warning">Fill Button</Button></p>
            <p><Button uiFill={true} style={{ backgroundColor: '#ccc' }}>Custom Style</Button></p>
          </ContainerBlock>
        </Container>
      </div>
    )
  }
}
module.exports = exports['default']
