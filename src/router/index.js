import Vue from 'vue'
import VueRouter from 'vue-router'
import Itinerary_Help from '../views/nav/navPag/Itinerary_Help.vue'
import Shopping from "../views/nav/navPag/Shopping.vue"
import Hotel from "../views/nav/navPag/Hotel.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import("../views/Home.vue")
  },
  {
    path:'/destination',
    name:"destination",
    component:()=>import("../views/nav/navPag/Destination.vue")
  },
  {
    path:"/idiom",
    name:"idiom",
    component:()=>import("../views/nav/navPag/Idiom.vue")
  },
  {
    path:"/community",
    name:"community",
    component:()=>import("../views/nav/navPag/Community.vue")
  },
  {
    path:"/itinerary_Help",
    name:"itinerary_Help",
    component:Itinerary_Help
  },
  {
    path:"/shopping",
    name:"shopping",
    component:Shopping
  },
  {
    path:"/hotel",
    name:"hotel",
    component:Hotel
  },
  {
    path:"/special_Hotel",
    name:"Special_Hotel",
    component:()=>import("../views/nav/navPag/Special_Hotel.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
