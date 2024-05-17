import { createRouter, createWebHistory } from 'vue-router'
import useSessionToken from '../stores/useSessionToken'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: () => import('../layout/index.vue'),
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/Login.vue')
		}
		
	]
})

router.beforeEach((to, from, next) => {
	const token = useSessionToken()
	if (to.name === 'login' && token.token) {
		next('/')
	} else if (to.name === 'home' && !token.token) {
		next('/login')
	} else {
		next()
	}
})

export default router