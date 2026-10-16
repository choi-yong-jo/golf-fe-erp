<template>
  <header class="app-header">
    <div class="header-left">
      <h1 class="logo">GOLF ERP</h1>
      <span class="system-name">골프장 통합 관리 시스템</span>
    </div>

    <div class="header-right">
      <span class="user-name">관리자</span>
      <button class="logout-button" @click="logout">로그아웃</button>
    </div>
  </header>
</template>

<script setup lang="ts">
const logout = () => {
  alert('로그아웃 기능은 추후 연동할 예정입니다.')
}
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

.header-left,
.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo {
  margin: 0;
  font-size: 21px;
  color: #166534;
}

.system-name,
.user-name {
  font-size: 14px;
  color: #374151;
}

.logout-button {
  padding: 8px 14px;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  background: #ffffff;
  cursor: pointer;
}
</style>
