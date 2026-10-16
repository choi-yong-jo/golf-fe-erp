
<script setup lang="ts">
import AppHeader from '../components/layout/AppHeader.vue'
import AppSidebar from '../components/layout/AppSidebar.vue'
</script>

<template>
  <div class="erp-layout">
    <AppHeader />

    <div class="erp-body">
      <AppSidebar />

      <main class="main-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.erp-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f8fafc;
}

.erp-body {
  display: grid;
  grid-template-columns: 225px minmax(0, 1fr);
  flex: 1;
  min-height: calc(100vh - 64px);
}

.main-content {
  min-width: 0;
  padding: 30px;
  overflow-x: auto;
}

@media (max-width: 760px) {
  .erp-body {
    grid-template-columns: 175px minmax(0, 1fr);
  }

  .main-content {
    padding: 18px 14px;
  }
}
</style>
