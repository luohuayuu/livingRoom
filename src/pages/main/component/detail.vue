<template>
  <!-- 创建主容器 -->
  <div class="main-container">
    <!-- 左容器 -->
    <div class="left-container">
      <!-- 标签卡容器 -->
      <div class="tabs-container">
        <div 
          class="tab-item" 
          :class="{ 'active': activeTab === 'details' }" 
          @click="activeTab = 'details'"
        >
          详情
        </div>
        <div 
          class="tab-item" 
          :class="{ 'active': activeTab === 'interaction' }" 
          @click="activeTab = 'interaction'"
        >
          课程互动
        </div>
      </div>
      <!-- 标签卡内容 -->
      <div class="tab-content">
        <div v-if="activeTab === 'details'" class="empty-content">
          <img src="../../../assets/img_empty.svg" alt="暂无内容" class="empty-img">
          <span>暂无简介</span>
        </div>
        <div v-if="activeTab === 'interaction'" class="empty-content">
          <img src="../../../assets/img_empty.svg" alt="暂无内容" class="empty-img">
          <span>暂无简介</span>
        </div>
      </div>
    </div>
    <!-- 右容器 -->
    <div class="right-container">
      <h3 class="recommended-title">相关推荐</h3>
      <div class="recommendation-list">
        <div v-for="course in recommendedCourses" :key="course.id" class="course-item">
          <div class="course-image">
            <img :src="course.image" :alt="course.title">
            <span class="course-type">{{ course.type }}</span>
          </div>
          <div class="course-info">
            <h3 class="course-title">{{ course.title }}</h3>
            <div class="course-price-info">
              <div class="price-container">
                <span class="current-price">¥{{ formatPrice(course.price) }}</span>
                <span class="original-price">¥{{ formatPrice(course.originalPrice) }}</span>
              </div>
              <span class="purchase-count">{{ formatPurchaseCount(course.purchaseCount) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 定义当前激活的标签卡
const activeTab = ref('details');

// 推荐课程数据
const recommendedCourses = [
  {
    id: 1,
    title: '学习资料',
    type: '录播',
    image: 'https://wechatapppro-1252524126.file.myqcloud.com/apprnDA0ZDw4581/image/b_u_61dd571a9ee54_Km9JhdLJ/x0q6oilw1vfzxh.png',
    price: 99.00,
    originalPrice: 299.00,
    purchaseCount: 999
  },
  {
    id: 2,
    title: 'llllly',
    type: '直播',
    image: 'https://commonresource-1252524126.cdn.xiaoeknow.com/image/lib50tzy019h.png',
    price: 299.00,
    originalPrice: 399.00,
    purchaseCount: 888
  },
  {
    id: 3,
    title: 'offer收割机',
    type: '图文',
    image: 'https://commonresource-1252524126.cdn.xiaoeknow.com/image/l6nfw9120t1u.png?imageView2/2/w/1050/q/100|imageMogr2/ignore-error/1',
    price: 0.00,
    originalPrice: 99.00,
    purchaseCount: 3333
  }
];

// 格式化价格显示
const formatPrice = (price: number) => {
  return price.toFixed(2);
};

// 格式化购买人数
const formatPurchaseCount = (count: number) => {
  if (count >= 10000) {
    return (count / 10000).toFixed(1) + '万人购买';
  }
  return count + '人购买';
};
</script>

<style scoped>
/* 主容器样式 */
.main-container {
  display: flex;
  gap: 20px; /* 左右容器间距 */
  justify-content: center;
  margin-top: 20px;
}

/* 左容器样式 */
.left-container {
  width: 740px;
  height: 1000px;
  background-color: #fff; /* 设置左容器背景颜色为纯白 */
}

/* 右容器样式 */
.right-container {
  width: 240px;
  height: 1000px;
  background-color: #fff; /* 设置右容器背景颜色为纯白 */
  padding: 10px;
}

/* 推荐标题样式 */
.recommended-title {
  font-size: 22px;
  height: 50px;
  margin: 0%;
}

/* 推荐列表样式 */
.recommendation-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* 课程项样式 */
.course-item {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;
}

/* 课程图片样式 */
.course-image {
  position: relative;
  margin-bottom: 10px;
}

.course-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.course-type {
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 12px;
  padding: 2px 5px;
  border-radius: 4px;
}

/* 课程信息样式 */
.course-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.course-title {
  font-size: 14px;
  margin: 0;
}

.course-price-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-container {
  display: flex;
  gap: 5px;
}

.current-price {
  color: #f40;
  font-weight: bold;
}

.original-price {
  color: #999;
  text-decoration: line-through;
}

.purchase-count {
  color: #666;
  font-size: 12px;
}

/* 标签卡容器样式 */
.tabs-container {
  display: flex;
  height: 50px;
}

/* 标签卡项样式 */
.tab-item {
  padding: 10px 20px;
  cursor: pointer;
  transition: color 0.3s;
}

/* 激活状态的标签卡项样式 */
.tab-item.active {
  /*蓝色样式 */
  color: #149dff;
  border-bottom: 2px solid #149dff;
}

/* 标签卡内容样式 */
.tab-content {
  padding: 20px 0;
}

/* 空状态内容样式 */
.empty-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 居中偏上 */
  margin-top: 15%; 
}

/* 空状态图片样式 */
.empty-img {
  width: 100px; /* 可根据实际情况调整图片大小 */
  height: auto;
  margin-bottom: 10px;
}
</style>