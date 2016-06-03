import '../style/layui.less'

import injectTapEventPlugin from 'react-tap-event-plugin'
// tap事件初始化
injectTapEventPlugin()

module.exports = {
  NavBar: require('./NavBar'),
  ToolBar: require('./ToolBar'),
  Button: require('./Button'),
  Form: require('./Form'),
  SideBar: require('./SideBar'),
  SearchBar: require('./SearchBar'),
  TabBar: require('./TabBar'),
  Grid: require('./Grid'),
  Alert: require('./Alert'),
  Calendar: require('./Calendar'),
  ActionSheet: require('./ActionSheet'),
  Picker: require('./Picker'),
  DateTimePicker: require('./DateTimePicker'),
  List: require('./List'),
  Card: require('./Card')
}
