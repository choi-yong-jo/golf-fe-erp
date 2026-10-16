import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: DefaultLayout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('../views/dashboard/Dashboard.vue'),
          meta: { title: '대시보드' },
        },
        {
          path: 'reservations',
          name: 'reservations',
          component: () => import('../views/reservation/ReservationList.vue'),
          meta: { title: '예약 관리' },
        },
        {
          path: 'members',
          name: 'members',
          component: () => import('../views/member/MemberList.vue'),
          meta: { title: '회원 관리' },
        },
        {
          path: 'courses',
          name: 'courses',
          component: () => import('../views/course/CourseList.vue'),
          meta: { title: '코스 관리' },
        },
        {
          path: 'system',
          name: 'system',
          component: () => import('../views/system/SystemView.vue'),
          meta: { title: '시스템 설정' },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/dashboard',
    },
  ],
})

export default router
