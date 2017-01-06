/* only for building vux.css */
import Style from '../styles/index.vue' // eslint-disable-line

import ViewBox from './view-box'
import { Flexbox, FlexboxItem } from './flexbox'
import { Tabbar, TabbarItem } from './tabbar'
import { Tab, TabItem } from './tab'
const vux = {Tab,
  TabItem,
  Tabbar,
  TabbarItem,
  ViewBox,
  Flexbox,
  FlexboxItem
}
module.exports = vux
