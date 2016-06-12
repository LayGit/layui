import {
  App,
  Dashboard,
  ActionSheetView,
  ModalView,
  ButtonView,
  CalendarView,
  CardView,
  DateTimePickerView,
  FormView,
  GridView,
  ListView,
  NavBarView,
  PickerView,
  SearchBarView,
  SideBarView,
  TabBarView,
  ToolBarView
} from '../views'

export const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Dashboard },
  childRoutes:[
    { path: 'actionsheet', component: ActionSheetView },
    { path: 'modal', component: ModalView },
    { path: 'button', component: ButtonView },
    { path: 'calendar', component: CalendarView },
    { path: 'card', component: CardView },
    { path: 'datetimepicker', component: DateTimePickerView },
    { path: 'form', component: FormView },
    { path: 'grid', component: GridView },
    { path: 'list', component: ListView },
    { path: 'navbar', component: NavBarView },
    { path: 'picker', component: PickerView },
    { path: 'searchbar', component: SearchBarView },
    { path: 'tabbar', component: TabBarView },
    { path: 'toolbar', component: ToolBarView }
  ]
}
