import React from 'react'
import { NavBar, Container, Form, Grid, Button } from 'layui'
const FormItem = Form.Item
const Block = Container.Block
const Col = Grid.Col

export default class FormView extends React.Component {
  render () {
    return (
      <div>
        <NavBar title="表单" />
        <Container>
          <Form>
            <FormItem title="姓名">
              <input type="text" placeholder="Your name" />
            </FormItem>
            <FormItem title="邮箱">
              <input type="email" placeholder="E-mail" />
            </FormItem>
            <FormItem title="密码">
              <input type="password" placeholder="Password" />
            </FormItem>
            <FormItem title="性别">
              <select>
                <option>Male</option>
                <option>Female</option>
              </select>
            </FormItem>
            <FormItem title="生日">
              <input type="date" placeholder="Birth day" value="2014-04-30" />
            </FormItem>
            <FormItem title="开关">
              <label className="label-switch">
                <input type="checkbox" />
                <div className="checkbox"></div>
              </label>
            </FormItem>
            <FormItem title="文本域" alignTop={true}>
              <textarea></textarea>
            </FormItem>
          </Form>
          <Block>
            <Grid>
              <Col span={50}><Button uiBig={true} uiStyle="danger" uiFill={true}>取消</Button></Col>
              <Col span={50}><Button uiBig={true} uiStyle="success" uiFill={true}>提交</Button></Col>
            </Grid>
          </Block>
        </Container>
      </div>
    )
  }
}
module.exports = exports['default']
