import React from 'react'
import { NavBar, Container, TabBar } from 'layui'
const ContainerBlock = Container.Block
const TabBarItem = TabBar.Item

export default class TabBarView extends React.Component {
  render () {
    return (
      <div>
        <NavBar title="标签页" />
        <Container>
          <TabBar defActiveIndex={1}>
            <TabBarItem title="全部">
              <ContainerBlock>
                <p>This is tab 1 content</p>
              </ContainerBlock>
            </TabBarItem>
            <TabBarItem title="待付款">
              <ContainerBlock>
                <p>This is tab 2 content</p>
              </ContainerBlock>
            </TabBarItem>
            <TabBarItem title="已付款">
              <ContainerBlock>
                <p>This is tab 3 content</p>
              </ContainerBlock>
            </TabBarItem>
          </TabBar>
        </Container>
      </div>
    )
  }
}
module.exports = exports['default']
