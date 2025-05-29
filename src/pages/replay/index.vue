<template>
  <div class="replay-page">
    <!-- 导航栏 -->
    <nav class="navigation">
      <div class="nav-left">
        <span class="nav-item">录播演示</span>
        <span class="nav-item">·直播已结束</span>
        <span class="nav-item">观看人数11111</span>
        <span class="nav-item">人气22222</span>
      </div>
      <div class="nav-right">

      </div>
    </nav>
    <div class="main-content">
      <!-- 视频播放容器 -->
      <div class="video-container">
        <!-- 这里可以替换为实际的视频播放组件 -->
        <video controls width="100%" height="100%">
          <source src="../../assets/test.mp4" type="video/mp4">
          您的浏览器不支持视频播放。
        </video>
      </div>
      <!-- 聊天容器 -->
      <div class="chat-container">
        <!-- 选项卡 -->
        <div class="tab-header">
          <button 
            :class="{ 'active': activeTab === 'explanation' }" 
            @click="activeTab = 'explanation'"
          >
            讲解
          </button>
          <button 
            :class="{ 'active': activeTab === 'discussion' }" 
            @click="activeTab = 'discussion'"
          >
            讨论
          </button>
          <button 
            :class="{ 'active': activeTab === 'files' }" 
            @click="activeTab = 'files'"
          >
            文件
          </button>
        </div>
        <!-- 选项卡内容 -->
        <div v-if="activeTab === 'explanation'" class="tab-content">
          <!-- 讲解内容 -->
          <div class="chat-messages" ref="explanationMessagesRef">
            <!-- 渲染讲解消息，添加头像 -->
            <div v-for="(message, index) in explanationMessages" :key="index" class="message">
              <img src="../../assets/wu.png" alt="头像" class="avatar">
              {{ message }}
            </div>
          </div>
          <div class="chat-input">
            <!-- 绑定 keyup 事件，监听回车键 -->
            <textarea v-model="explanationInput" placeholder="请输入您的讨论内容" @keyup.enter="sendExplanationMessage"></textarea>
            <button class="gray-btn" @click="sendExplanationMessage">发送</button>
          </div>
        </div>
        <div v-if="activeTab === 'discussion'" class="tab-content">
          <!-- 讨论内容 -->
          <div class="chat-messages" ref="discussionMessagesRef">
            <!-- 系统提醒 -->
            <div class="system-alert">
              系统提醒：直播内容和互动评论严禁传播违法或不良信息，如存在违规行为，小鹅通将采取封禁措施。严禁未成年人直播或提问。请谨慎行事，注意财产安全，防止个人或财产损失。
            </div>
            <!-- 渲染讨论消息，添加头像 -->
            <div v-for="(message, index) in discussionMessages" :key="index" class="message">
              <img src="../../assets/wu.png" alt="头像" class="avatar">
              {{ message }}
            </div>
          </div>
          <div class="chat-input">
            <!-- 绑定 keyup 事件，监听回车键 -->
            <textarea v-model="discussionInput" placeholder="请输入您的讨论内容" @keyup.enter="sendDiscussionMessage"></textarea>
            <button class="blue-btn" @click="sendDiscussionMessage">发送</button>
          </div>
        </div>
        <div v-if="activeTab === 'files'" class="tab-content">
          <!-- 文件内容 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUpdated } from 'vue';
// 定义当前激活的选项卡
const activeTab = ref('discussion');
// 存储讲解消息
const explanationMessages = ref<string[]>([]);
// 讲解输入框内容
const explanationInput = ref('');
// 存储讨论消息
const discussionMessages = ref<string[]>([]);
// 讨论输入框内容
const discussionInput = ref('');
// 定义消息列表的 ref
const explanationMessagesRef = ref<HTMLElement | null>(null);
const discussionMessagesRef = ref<HTMLElement | null>(null);

// 发送讲解消息
const sendExplanationMessage = () => {
  if (explanationInput.value.trim()) {
    explanationMessages.value.push(explanationInput.value.trim());
    explanationInput.value = '';
  }
};

// 发送讨论消息
const sendDiscussionMessage = () => {
  if (discussionInput.value.trim()) {
    discussionMessages.value.push(discussionInput.value.trim());
    discussionInput.value = '';
  }
};

// 在更新后滚动到消息列表底部
onUpdated(() => {
  if (explanationMessagesRef.value) {
    explanationMessagesRef.value.scrollTop = explanationMessagesRef.value.scrollHeight;
  }
  if (discussionMessagesRef.value) {
    discussionMessagesRef.value.scrollTop = discussionMessagesRef.value.scrollHeight;
  }
});
</script>

<style scoped>
body {
  margin: 0;
}
</style>

<style scoped>
.replay-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #323232;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-left .nav-title {
  font-size: 18px;
  font-weight: bold;
}

.nav-right {
  display: flex;
  gap: 15px;
}

.nav-item {
  font-size: 14px;
  color: #ffffff;
  margin-right: 10px;
}

.main-content {
  display: flex;
  flex: 1;
  height: calc(100vh - 40px);
}

.video-container {
  width: 80%;
  background-color: #000000;
}

.chat-container {
  width: 20%;
  display: flex;
  flex-direction: column;
  background-color: #2a2a2a; /* 深灰色背景 */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3); /* 阴影效果 */
  gap: 16px; /* 子元素间距 */
  overflow: hidden; /* 隐藏溢出内容 */
  flex: 1;
}

/* 优化选项卡头部样式 */
.tab-header {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.05); /* 半透明背景 */
  padding: 8px; /* 内边距 */
}

.tab-header button {
  padding: 8px 16px;
  background-color: transparent; /* 透明背景 */
  color: #ccc; /* 浅灰色文字 */
  border: none;
  border-radius: 0; /* 移除圆角 */
  cursor: pointer;
  transition: color 0.3s ease, border-bottom-color 0.3s ease; /* 过渡效果 */
  border-bottom: 2px solid transparent; /* 添加透明下划线 */
  margin: auto;
}

.tab-header button.active {
  background-color: transparent; /* 激活状态背景透明 */
  color: #149dff; /* 激活状态文字蓝色 */
  border-bottom-color: #149dff; /* 激活状态蓝色下划线 */
}

.tab-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.chat-messages {
  flex: 0.75;
  max-height: 550px; /* 最大高度 */;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.3); /* 半透明背景 */
  scrollbar-width: thin; /* 细滚动条 */
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent; /* 滚动条颜色 */
  height: 100%;
}

/* 自定义滚动条样式 */
.chat-messages::-webkit-scrollbar {
  width: 6px; /* 滚动条宽度 */
}

.chat-messages::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2); /* 滚动条滑块颜色 */
  border-radius: 3px; /* 滑块圆角 */
}

.chat-messages::-webkit-scrollbar-track {
  background-color: transparent; /* 滚动条轨道颜色 */
}

.chat-input {
  flex: 0.25;
  display: flex;
  flex-direction: column;
  position: relative;
  border-top: 40px solid #2a2a2a
}

.chat-input textarea {
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  color: white; /* 文字颜色 */
  resize: none;
  border: none;
}

.chat-input textarea:focus {
  outline: none;
}

.chat-input button {
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 背景过渡效果 */
  border-radius: 4px; /* 圆角边框 */
}

.chat-input .blue-btn {
  background-color: #149dff; /* 背景色 */
  color: white; /* 文字颜色 */
}

.chat-input .blue-btn:hover {
  background-color: #0681d9; /* 悬停时背景色 */
}

.chat-input .gray-btn {
  background-color: #666; /* 灰色背景 */
  color: white; /* 文字颜色 */
}

.chat-input .gray-btn:hover {
  background-color: #555; /* 悬停时背景色 */
}

/* 优化系统提醒样式 */
.system-alert {
  font-size: 14px;
  color: #ff4444;
  margin-bottom: 10px;
  padding: 12px;
  background-color: rgba(255, 68, 68, 0.1); /* 半透明背景 */
  border-radius: 6px; /* 圆角边框 */
  margin: 10px;
}
.message {
  color: white;
  padding: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex; /* 使用 flex 布局 */
  align-items: center; /* 垂直居中 */
  gap: 10px; /* 头像和消息间距 */
}

.avatar {
  width: 32px; /* 头像宽度 */
  height: 32px; /* 头像高度 */
  border-radius: 50%; /* 圆形头像 */
  object-fit: cover; /* 保持图片比例 */
}
</style>
