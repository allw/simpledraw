import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sorteio from '@/Components/Sorteio'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/sorteio',
        name: 'Sorteio',
        component: Sorteio
    }
  ]
})
