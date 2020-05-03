import Vue from 'vue'
import VueRouter from 'vue-router'

import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Download from './components/Download'
import Secret from './components/Secret'
import NotFound from './components/NotFound'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {name:"About Me", path: '/', component: AboutMe},
    {name:"Education", path: '/education', component: Education},
    {name:"Experience", path: '/experience', component: Experience, meta:{ title: "Experience"}},
    {name:"Skills", path: '/skills', component: Skills},
    {name:"Download", path: '/download', component: Download, meta:{hideNavigation:true, hideTitleBar: true, largeChips: true}},
    {name:"Secret", path: '/secret', component: Secret},
    {path: '*', component: NotFound}
  ],
  mode: 'history'
})

export default router;