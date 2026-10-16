<script setup lang="ts">
import { ref } from 'vue'

const keyword = ref('')
const members = ref([
  { id: 'MEM-001', name: '홍길동', phone: '010-0000-0001', grade: 'VIP' },
  { id: 'MEM-002', name: '김철수', phone: '010-0000-0002', grade: '일반' },
  { id: 'MEM-003', name: '이영희', phone: '010-0000-0003', grade: '일반' },
])
</script>

<template>
  <section class="page">
    <h1>회원 관리</h1>
    <p>회원 정보를 조회합니다.</p>

    <div class="toolbar">
      <input v-model="keyword" placeholder="회원 번호 또는 이름 검색" />
      <span>전체 {{ members.filter(m => `${m.id} ${m.name}`.includes(keyword)).length }}명</span>
    </div>

    <table>
      <thead>
        <tr><th>회원 번호</th><th>회원명</th><th>연락처</th><th>등급</th></tr>
      </thead>
      <tbody>
        <tr v-for="m in members.filter(m => `${m.id} ${m.name}`.includes(keyword))" :key="m.id">
          <td>{{ m.id }}</td><td>{{ m.name }}</td><td>{{ m.phone }}</td><td>{{ m.grade }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.page { color: #334155; }
h1 { margin: 0; color: #0f172a; font-size: 25px; }
p { margin: 8px 0 24px; color: #64748b; font-size: 13px; }
.toolbar { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 18px; margin-bottom: 18px; border: 1px solid #e2e8f0; border-radius: 9px; background: white; font-size: 12px; }
input { width: min(320px, 100%); padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; }
table { width: 100%; border-collapse: collapse; background: white; }
th, td { padding: 15px; border: 1px solid #e2e8f0; text-align: left; font-size: 12px; }
th { background: #f8fafc; color: #64748b; }
</style>