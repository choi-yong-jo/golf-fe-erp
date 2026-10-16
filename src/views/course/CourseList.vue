<script setup lang="ts">
const courses = [
  { code: 'COURSE-01', name: 'OUT 코스', holes: 18, status: '운영 중' },
  { code: 'COURSE-02', name: 'IN 코스', holes: 18, status: '운영 중' },
]
</script>

<template>
  <section class="page">
    <h1>코스 관리</h1>
    <p>골프장 코스 정보를 관리합니다.</p>

    <table>
      <thead>
        <tr><th>코스 코드</th><th>코스명</th><th>홀 수</th><th>운영 상태</th></tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.code">
          <td>{{ course.code }}</td>
          <td>{{ course.name }}</td>
          <td>{{ course.holes }}홀</td>
          <td>{{ course.status }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.page { color: #334155; }
h1 { margin: 0; color: #0f172a; font-size: 25px; }
p { margin: 8px 0 24px; color: #64748b; font-size: 13px; }
table { width: 100%; border-collapse: collapse; background: white; }
th, td { padding: 16px; border: 1px solid #e2e8f0; text-align: left; font-size: 12px; }
th { background: #f8fafc; color: #64748b; }
</style>