import React from 'react'
import { NavBar, Container, Card } from 'layui'
const BlockTitle = Container.BlockTitle
const CardItem = Card.Item
const CardList = Card.List

export default class CardView extends React.Component {
  render () {
    return (
      <div>
        <NavBar title="卡片" />
        <Container>
          <BlockTitle>简单卡片</BlockTitle>
          <Card>这是一个用纯文本的简单卡片。但卡片可以包含自己的页头，页脚，列表视图，图像，和里面的任何元素。</Card>
          <Card header="卡头" footer="卡脚">头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。</Card>
          <Card>这是一个用纯文本的简单卡片。但卡片可以包含自己的页头，页脚，列表视图，图像，和里面的任何元素。</Card>
          <BlockTitle>风格卡片</BlockTitle>
          <Card
            coverImage="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg"
            footer={[<a href="#" className="link" key="1">赞</a>, <a href="#" className="link" key="2">更多</a>]}>
            <p style={{ color: '#999' }}>发表于 2015/01/15</p>
            <p>此处是内容...</p>
          </Card>
          <BlockTitle>Facebook 卡片</BlockTitle>
          <Card
            facebook={{
              avatar: 'http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg',
              name: '夜萧',
              date: '星期一 3:47pm'
            }}
            footer={[
              <a href="#" className="link" key="1">赞</a>,
              <a href="#" className="link" key="2">评论</a>,
              <a href="#" className="link" key="3">分享</a>
            ]}
          >
            <img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="100%" />
          </Card>
          <BlockTitle>列表视图卡片</BlockTitle>
          <Card type="list">
            <CardItem title="链接 1" />
          </Card>
          <Card
            type="list"
            listStyle="media"
            header="新的公布："
            footer={[<span>2015/01/15</span>,<span>5 评论</span>]}>
            <CardItem
              media={<img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="44" />}
              title="标题"
              subTitle="子标题" />
          </Card>
        </Container>
      </div>
    )
  }
}
module.exports = exports['default']
