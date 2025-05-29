<template>
  <div class="card-container">
    <div 
      v-for="(item, index) in ['电话', '位置', '公告', '客服', '苹果']" 
      :key="index + 1" 
      class="card" 
      @mouseenter="showImageIndex = index + 1" 
      @mouseleave="showImageIndex = 0"
    >
      <!-- 根据索引显示对应的图标 -->
      <component :is="icons[index]" />
      <span>{{ item }}</span>
      <!-- 根据 i 的值动态生成图片路径 -->
      <div v-if="showImageIndex === index + 1" class="image-preview">
        <img :src="getImageUrl(index + 1)" :alt="`预览图片 ${index + 1}`" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Call1Icon, LocationIcon, CalendarIcon, UserIcon, LogoAppleIcon } from 'tdesign-icons-vue-next';

// 定义图标数组
const icons = [Call1Icon, LocationIcon, CalendarIcon, UserIcon, LogoAppleIcon];

// 定义响应式变量，用于控制当前显示图片的名片索引，0 表示不显示
const showImageIndex = ref(0);

// 定义生成图片 URL 的函数
const getImageUrl = (index: number) => {
  return new URL(`../../../assets/${index}.png`, import.meta.url).href;
};
</script>

<style scoped>
.card-container {
  position: fixed;
  right: 20px;
  top: 50%; /* 让容器顶部位于视口垂直中心 */
  transform: translateY(-50%); /* 向上移动自身高度的一半，实现垂直居中 */
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* 名片样式 */
.card {
  width: 70px;
  height: 70px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column; /* 修改为垂直布局 */
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative; /* 添加相对定位，用于定位图片预览 */
}

.card:hover {
  background-color: #f0f0f0;
}

/* 图片预览样式 */
.image-preview {
  position: absolute;
  left: -220px; /* 图片在名片左边，根据图片宽度调整 */
  top: 50%;
  transform: translateY(-50%); /* 垂直居中 */
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 200px;
  max-height: 200px;
}

.image-preview img {
  max-width: 200px;
  max-height: 200px;
}
</style>