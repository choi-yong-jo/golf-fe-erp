
<script setup lang="ts">
import { ref } from 'vue'

const stats = [
  { label: '오늘 예약', value: '128', unit: '건', change: '+12.5%' },
  { label: '등록 회원', value: '2,450', unit: '명', change: '+4.2%' },
  { label: '운영 코스', value: '4', unit: '개', change: '정상 운영' },
  { label: '예약 대기', value: '12', unit: '건', change: '확인 필요' },
]

const recentReservations = ref([
  { id: 'RSV-1001', name: '홍길동', course: 'OUT 코스', time: '08:30', status: '예약 완료' },
  { id: 'RSV-1002', name: '김철수', course: 'IN 코스', time: '09:00', status: '예약 완료' },
  { id: 'RSV-1003', name: '이영희', course: 'OUT 코스', time: '09:30', status: '대기' },
  { id: 'RSV-1004', name: '박민수', course: 'IN 코스', time: '10:00', status: '예약 완료' },
])
</script>

<template>
  <div class="dashboard">
    <div class="page-heading">
      <div>
        <h1>대시보드</h1>
        <p>골프장 운영 현황을 확인하세요.</p>
      </div>
      <span class="today">운영 현황</span>
    </div>

    <section class="stats-grid">
      <article v-for="stat in stats" :key="stat.label" class="stat-card">
        <div class="stat-label">{{ stat.label }}</div>
        <div class="stat-value">
          {{ stat.value }}<small>{{ stat.unit }}</small>
        </div>
        <div class="stat-change">{{ stat.change }}</div>
      </article>
    </section>

    <section class="panel">
      <div class="panel-heading">
        <div>
          <h2>최근 예약 현황</h2>
          <p>최근 등록된 예약 목록입니다.</p>
        </div>
        <RouterLink to="/reservations" class="more-link">
          전체 보기 →
        </RouterLink>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>예약 번호</th>
              <th>예약자</th>
              <th>코스</th>
              <th>예약 시간</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in recentReservations" :key="item.id">
              <td class="reservation-id">{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.course }}</td>
              <td>{{ item.time }}</td>
              <td>
                <span
                  class="status"
                  :class="item.status === '대기' ? 'pending' : 'completed'"
                >
                  {{ item.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-heading,
.panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.page-heading {
  margin-bottom: 26px;
}

h1 {
  margin: 0;
  color: #0f172a;
  font-size: 25px;
}

.page-heading p,
.panel-heading p {
  margin: 8px 0 0;
  color: #64748b;
  font-size: 13px;
}

.today {
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 7px;
  background: white;
  color: #475569;
  font-size: 12px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 24px;
}

.stat-card,
.panel {
  border: 1px solid #e2e8f0;
  border-radius: 11px;
  background: white;
}

.stat-card {
  padding: 22px;
}

.stat-label {
  color: #64748b;
  font-size: 13px;
}

.stat-value {
  margin-top: 17px;
  color: #0f172a;
  font-size: 29px;
  font-weight: 750;
}

.stat-value small {
  margin-left: 5px;
  color: #64748b;
  font-size: 13px;
  font-weight: 400;
}

.stat-change {
  margin-top: 12px;
  color: #2563eb;
  font-size: 12px;
}

.panel {
  overflow: hidden;
}

.panel-heading {
  padding: 23px 24px;
  border-bottom: 1px solid #e2e8f0;
}

.panel-heading h2 {
  margin: 0;
  font-size: 16px;
}

.panel-heading p {
  font-size: 12px;
}

.more-link {
  color: #2563eb;
  font-size: 12px;
  text-decoration: none;
  white-space: nowrap;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  white-space: nowrap;
}

th,
td {
  padding: 16px 24px;
  border-bottom: 1px solid #f1f5f9;
  font-size: 12px;
}

th {
  background: #f8fafc;
  color: #64748b;
  font-weight: 600;
}

td {
  color: #334155;
}

.reservation-id {
  color: #2563eb;
  font-weight: 600;
}

.status {
  display: inline-block;
  padding: 5px 9px;
  border-radius: 5px;
  font-size: 11px;
}

.completed {
  background: #dcfce7;
  color: #166534;
}

.pending {
  background: #fef3c7;
  color: #92400e;
}

@media (max-width: 1100px) {
  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
