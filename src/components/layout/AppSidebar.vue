<template>
  <aside class="app-sidebar">
    <nav>
      <ul class="menu-list">
        <li v-for="menu in menus" :key="menu.path" class="menu-item">
          <RouterLink :to="menu.path" class="menu-link" active-class="active">
            {{ menu.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const menus = [
  { label: '대시보드', path: '/' },
  { label: '예약 관리', path: '/reservations' },
  { label: '회원 관리', path: '/members' },
  { label: '예약 현황', path: '/booking-status' },
  { label: '코스 관리', path: '/courses' },
  { label: '요금 관리', path: '/prices' },
  { label: '정산 관리', path: '/settlements' },
  { label: '시스템 설정', path: '/settings' },
]
</script>

<style scoped>
.app-sidebar {
  width: 230px;
  min-height: calc(100vh - 64px);
  padding: 20px 12px;
  box-sizing: border-box;
  background: #1f2937;
}

.menu-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu-item {
  margin-bottom: 6px;
}

.menu-link {
  display: block;
  padding: 12px 14px;
  border-radius: 6px;
  color: #d1d5db;
  text-decoration: none;
  font-size: 14px;
}

.menu-link:hover,
.menu-link.active {
  background: #166534;
  color: #ffffff;
}
</style>
