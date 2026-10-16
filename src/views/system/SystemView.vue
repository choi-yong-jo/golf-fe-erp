<script setup lang="ts">
import { ref } from 'vue'

const settings = ref({
  golfClubName: 'GOLF ERP',
  reservationEnabled: true,
  notificationEnabled: true,
})

const saved = ref(false)

function saveSettings() {
  saved.value = true
}
</script>

<template>
  <section class="page">
    <h1>시스템 설정</h1>
    <p>시스템의 기본 운영 옵션을 설정합니다.</p>

    <form class="settings-panel" @submit.prevent="saveSettings">
      <label class="field">
        골프장 표시명
        <input v-model="settings.golfClubName" required />
      </label>

      <label class="toggle">
        <input v-model="settings.reservationEnabled" type="checkbox" />
        예약 기능 사용
      </label>

      <label class="toggle">
        <input v-model="settings.notificationEnabled" type="checkbox" />
        알림 기능 사용
      </label>

      <button type="submit">설정 저장</button>
      <span v-if="saved" class="message">
        화면 내 설정 값이 변경되었습니다. 서버 저장은 아직 연결되지 않았습니다.
      </span>
    </form>
  </section>
</template>

<style scoped>
.page { color: #334155; }
h1 { margin: 0; color: #0f172a; font-size: 25px; }
p { margin: 8px 0 24px; color: #64748b; font-size: 13px; }
.settings-panel { display: flex; flex-direction: column; align-items: start; gap: 22px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 10px; background: white; }
.field { display: flex; flex-direction: column; gap: 8px; width: min(420px, 100%); font-size: 13px; }
.field input { padding: 11px; border: 1px solid #cbd5e1; border-radius: 6px; }
.toggle { display: flex; align-items: center; gap: 9px; font-size: 13px; }
button { padding: 11px 18px; border: 0; border-radius: 6px; background: #1d4ed8; color: white; cursor: pointer; }
.message { color: #64748b; font-size: 12px; }
</style>