import React from 'react'
import { NavBar, Container, List } from 'layui'
const BlockTitle = Container.BlockTitle
const ListItem = List.Item
const ListGroup = List.Group

export default class ListView extends React.Component {
  render () {
    return (
      <div>
        <NavBar title="列表" />
        <Container>
          <BlockTitle>图标、标题和副标题</BlockTitle>
          <List>
            <ListItem title="商品名称" after="杜蕾斯" />
            <ListItem title="型号" after="极致超薄型" />
            <ListItem title="库存" after="123件" />
          </List>
          <BlockTitle>标题和副标题</BlockTitle>
          <List>
            <ListItem title="商品名称" after="杜蕾斯" />
            <ListItem title="型号" after="极致超薄型" />
            <ListItem title="库存" after="123件" />
          </List>
          <BlockTitle>带箭头</BlockTitle>
          <List>
            <ListItem title="商品名称" after="杜蕾斯" arrow={true} />
            <ListItem title="型号" after="极致超薄型" arrow={true} />
            <ListItem title="库存" after="123件" arrow={true} />
          </List>
          <BlockTitle>分组</BlockTitle>
          <List group={true}>
            <ListGroup title="A">
              <ListItem title="阿大" />
              <ListItem title="阿二" />
              <ListItem title="阿三" />
            </ListGroup>
            <ListGroup title="B">
              <ListItem title="本大" />
              <ListItem title="本二" />
              <ListItem title="本三" />
            </ListGroup>
          </List>
          <BlockTitle>曲目</BlockTitle>
          <List listStyle="media">
            <ListItem
              media={<img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" style={{ width: '4rem' }} />}
              title="标题"
              after="$15"
              subTitle="副标题"
              text="此处是文本内容..."
              arrow={true}
              href="#"
            />
          </List>
          <BlockTitle>邮件应用</BlockTitle>
          <List listStyle="media">
            <ListItem
              title="Facebook"
              after="17:14"
              subTitle="子标题"
              text="此处是文本内容..."
              href="#"
            />
          </List>
          <BlockTitle>简单列表</BlockTitle>
          <List listStyle="media">
            <ListItem
              media={<img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" style={{ width: '2.2rem' }} />}
              title="标题"
              subTitle="子标题"
            />
          </List>
          <BlockTitle>嵌入式</BlockTitle>
          <List listStyle="media" inset={true}>
            <ListItem
              media={<img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" style={{ width: '2.2rem' }} />}
              title="标题"
              subTitle="子标题"
              href="http://www.baidu.com"
            />
          </List>
        </Container>
      </div>
    )
  }
}
module.exports = exports['default']
