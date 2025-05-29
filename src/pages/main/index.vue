<template>
  <!-- 引入导航栏组件 -->
  <Navigation />
  <First />
  <!-- 引入详情组件 -->
  <Detail />
  <!-- 引入名片组件 -->
  <Card />
  <!-- 引入底栏组件 -->
  <Bottom />
</template>

<script setup lang="ts">
import First from './component/first.vue';
// 导入名片组件
import Card from './component/card.vue';
import Navigation from './component/navigation.vue';
// 导入底栏组件
import Bottom from './component/bottom.vue';
// 导入详情组件
import Detail from './component/detail.vue';
</script>

<style scoped>
/* 可根据需要添加全局样式 */
</style>