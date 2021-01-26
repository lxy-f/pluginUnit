import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antd from 'ant-design-vue'
import VCharts from 'v-charts'
import 'echarts-liquidfill'
import 'ant-design-vue/dist/antd.css'
import vScrollbar from 'vue-scrollbar-custom'

Vue.use(antd)
Vue.use(VCharts)
Vue.component('v-scrollbar', vScrollbar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
