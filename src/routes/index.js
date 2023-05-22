import { createRouter, createWebHistory,  } from 'vue-router'
import Layout from '../components/Layout.vue'
import Home from '../views/Home.vue'
import SearchByName from '../views/SearchByName.vue'
import SearchByLatter from '../views/SearchByLatter.vue'
import SearchByMeal from '../views/SearchByMeal.vue'

const routes = [
    { path: '/', 
    component: Layout,
    children: [
        {
            path: '/',
            name: 'Home',
            component : Home

        },
        {
            path: '/name/:name?',
            name: 'SearchByName',
            component : SearchByName

        },
        {
            path: '/latter/:latter?',
            name: 'SearchByLatter',
            component : SearchByLatter

        },
        {
            path: '/meal/:meal?',
            name: 'SearchByMeal',
            component : SearchByMeal

        },
    ]
 },
    
  ]




  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
    export default router