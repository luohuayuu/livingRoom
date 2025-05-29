<template>
  <!-- 添加白色容器 -->
  <div class="white-container">
    <!-- 插入图片，设置 margin-right -->
    <img src="../../../assets/liveCover.png" alt="直播封面" class="live-cover" />
    <!-- 新增包裹容器 -->
    <div class="wrapper-container">
      <!-- 新增中间容器 -->
      <div class="middle-container">
        <div class="left-text">
          <span class="live-text">直播</span>
          <span class="record-text">录播演示</span>
        </div>
        <div class="right-text">
          <!-- 绑定鼠标事件 -->
          <div 
            class="icon-container" 
            @mouseenter="showPreview = true" 
            @mouseleave="showPreview = false"
          >
            <MobileIcon />
            <span>手机观看</span>
            <!-- 根据状态显示图片预览 -->
            <div v-if="showPreview" class="image-preview">
              <img src="../../../assets/手机观看.gif" alt="手机观看" />
            </div>
          </div>
        </div>
      </div>
      <div class="live-time-container">
        <span class="live-time-text">直播时间： 2025.05.11 23:40:00</span>
      </div>
      <!-- 新增进入回放按钮和直播已结束文字 -->
      <div class="bottom-left-content">
        <!-- 绑定点击事件 -->
        <button class="replay-button" @click="goToReplay">进入回放</button>
        <span class="live-ended-text">直播已结束</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MobileIcon } from 'tdesign-icons-vue-next'; // 按需修改引入路径
import { ref } from 'vue';
// 移除未使用的导入
// import { useRouter } from 'vue-router';

// 定义响应式变量控制图片预览显示
const showPreview = ref(false);

// 定义跳转函数
const goToReplay = () => {
  // 使用 window.open 打开新页面
  window.open('/replay', '_blank');
};
</script>

<style scoped>
/* 新增白色容器样式 */
.white-container {
  width: 1152px;
  height: 212px;
  background-color: white;
  border: 24px solid white;
  margin: 0 auto; /* 水平居中 */
  margin-top: 20px; /* 与导航栏保持间距 */
  display: flex; /* 使用 flex 布局 */
  align-items: flex-start; /* 让子元素顶部对齐 */
}

/* 直播封面图片样式 */
.live-cover {
  margin-right: 24px;
  width: 376px;
  height: 212px; 
}

/* 新增包裹容器样式 */
.wrapper-container {
  width: 752px;
  height: 212px;
  display: flex;
  flex-direction: column;
  position: relative; /* 为子元素绝对定位提供参考 */
}

/* 新增左下角内容容器样式 */
.bottom-left-content {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 10px; /* 按钮和文字间距 */
  margin-bottom: 10px; /* 距离底部的间距 */
  margin-left: 10px; /* 距离左侧的间距 */
}

/* 新增进入回放按钮样式 */
.replay-button {
  background-color: #14be82; /* 绿色背景 */
  color: white; /* 白色文字 */
  border: none;
  border-radius: 4px;
  padding: 0px 6px;
  cursor: pointer;
  font-size: 14px;
  height: 40px;
  width: 88px;
}

/* 新增直播已结束文字样式 */
.live-ended-text {
  color: black;
  font-size: 12px;
}

/* 新增中间容器样式 */
.middle-container {
  width: 752px;
  height: 32px;
  margin-right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 新增直播时间容器样式 */
.live-time-container {
  margin-top: 10px; /* 与中间容器保持间距 */
}

/* 新增直播时间文本样式 */
.live-time-text {
  font-size: 14px;
  color: #666;
}

/* 左侧文本样式 */
.left-text {
  display: flex;
  flex-direction: row;
  gap: 10px; /* 文本间距 */
  /*高度对齐 */
  align-items: center;
}

/* 直播文字样式 */
.live-text {
  font-size: 12px;
  font-weight: normal;
  padding: 0px 6px ; /* 内边距 */
  width: 24px;
  height: 18px;
  /**绿色文字 */
  color: #14be82;
  /**灰色背景 */
  background-color: #f0f0f0;
}

/* 录播演示文字样式 */
.record-text {
  font-size: 24px;
  font-weight: bold;
}

/* 右侧文本样式 */
.right-text {
  display: flex;
  align-items: center;
  gap: 5px; /* 图标和文本间距 */
  font-size: 12px;
  margin-left: auto;
}

/* 图片预览样式 */
.image-preview {
  position: absolute;
  top: 20%; /* 位于父元素底部 */

  transform: translateX(-50%); /* 微调以实现真正的居中 */
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 200px;
  max-height: 200px;
  z-index: 10;
}

.image-preview img {
  max-width: 200px;
  max-height: 200px;
}
</style>