// src/main.js
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './theme.css'
import './style.css'

import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import ProjectsPage from './views/ProjectsPage.vue'
import ResumePage from './views/ResumePage.vue'
import ContactPage from './views/ContactPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/projects', component: ProjectsPage },
    { path: '/resume', component: ResumePage },
    { path: '/contact', component: ContactPage },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

createApp(App).use(router).mount('#app')