import '../style/layui.less'

import injectTapEventPlugin from 'react-tap-event-plugin'
// tap事件初始化
injectTapEventPlugin()

module.exports = {
  Container: require('./Container'),
  NavBar: require('./NavBar'),
  ToolBar: require('./ToolBar'),
  Button: require('./Button'),
  Form: require('./Form'),
  SideBar: require('./SideBar'),
  SearchBar: require('./SearchBar'),
  TabBar: require('./TabBar'),
  Grid: require('./Grid'),
  modal: require('./modal'),
  Alert: require('./Alert'),
  calendar: require('./Calendar'),
  ActionSheet: require('./ActionSheet'),
  picker: require('./Picker'),
  DateTimePicker: require('./DateTimePicker'),
  List: require('./List'),
  Card: require('./Card'),
  Icon: require('./Icon')
}
