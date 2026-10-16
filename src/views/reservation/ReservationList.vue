
<script setup lang="ts">
import { computed, ref } from 'vue'

const keyword = ref('')
const status = ref('전체')

const reservations = ref([
  { id: 'RSV-1001', name: '홍길동', course: 'OUT 코스', date: '2026-10-16', status: '예약 완료' },
  { id: 'RSV-1002', name: '김철수', course: 'IN 코스', date: '2026-10-16', status: '대기' },
  { id: 'RSV-1003', name: '이영희', course: 'OUT 코스', date: '2026-10-17', status: '예약 완료' },
])

const filteredReservations = computed(() =>
  reservations.value.filter((item) => {
    const matchesKeyword =
      item.id.includes(keyword.value) || item.name.includes(keyword.value)
    const matchesStatus = status.value === '전체' || item.status === status.value

    return matchesKeyword && matchesStatus
  }),
)
</script>

<template>
  <section class="page">
    <div class="page-heading">
      <div>
        <h1>예약 관리</h1>
        <p>골프장 예약 내역을 조회하고 관리합니다.</p>
      </div>
    </div>

    <div class="search-panel">
      <label>
        검색어
        <input v-model="keyword" placeholder="예약 번호 또는 예약자" />
      </label>

      <label>
        예약 상태
        <select v-model="status">
          <option>전체</option>
          <option>예약 완료</option>
          <option>대기</option>
        </select>
      </label>

      <button type="button" @click="keyword = ''; status = '전체'">
        초기화
      </button>
    </div>

    <div class="table-panel">
      <div class="table-heading">
        예약 목록 <span>{{ filteredReservations.length }}건</span>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>예약 번호</th>
              <th>예약자</th>
              <th>코스</th>
              <th>예약일</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredReservations" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.course }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.status }}</td>
            </tr>
            <tr v-if="filteredReservations.length === 0">
              <td colspan="5" class="empty">검색 결과가 없습니다.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-heading { margin-bottom: 24px; }
h1 { margin: 0; font-size: 25px; color: #0f172a; }
p { margin-top: 8px; color: #64748b; font-size: 13px; }
.search-panel, .table-panel { background: white; border: 1px solid #e2e8f0; border-radius: 10px; }
.search-panel { display: flex; flex-wrap: wrap; align-items: end; gap: 16px; padding: 20px; margin-bottom: 20px; }
label { display: flex; flex-direction: column; gap: 8px; color: #475569; font-size: 12px; }
input, select { min-width: 190px; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; background: white; color: #334155; font: inherit; }
button { padding: 10px 16px; border: 0; border-radius: 6px; background: #1d4ed8; color: white; cursor: pointer; }
.table-heading { padding: 20px; font-size: 14px; font-weight: 700; }
.table-heading span { margin-left: 8px; color: #64748b; font-size: 12px; font-weight: 400; }
.table-wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; text-align: left; white-space: nowrap; }
th, td { padding: 15px 20px; border-top: 1px solid #e2e8f0; font-size: 12px; }
th { background: #f8fafc; color: #64748b; }
td { color: #334155; }
.empty { padding: 35px; text-align: center; color: #94a3b8; }
</style>
