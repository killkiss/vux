/* only for building vux.css */
//import Style from '../styles/index.vue'
import Vue from 'vue'
import Toast from '../components/toast'
import Loading from '../components/loading'
import ToastPlugin from '../plugins/toast/index.js'
const vuxDingzhi = {
  Toast,Loading,ToastPlugin
}
window.vuxDingzhi = vuxDingzhi
