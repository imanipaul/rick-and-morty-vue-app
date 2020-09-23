import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CharacterProfile from '../views/CharacterProfile.vue'

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/character/:characterId',
    name: 'CharacterProfile',
    component: CharacterProfile,
    props: true
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
