import Vue from 'vue'
import Router from 'vue-router'
import controlBox from '@/components/control-box'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name: 'control-box',
      component: controlBox
    }
  ]
})
