<template>
  <nav class="navbar">
    <!-- 导航栏内容 -->
    <img src="../../../assets/导航栏.png" alt="导航栏图片" class="navbar-image" />
    <!-- 导航菜单项和搜索框 -->
    <div class="navbar-menu">
      <!-- 根据 isSearching 控制导航菜单项的显示与隐藏 -->
      <div v-if="!isSearching" class="menu-items">
        <a href="#" class="menu-item">首页</a>
        <a href="#" class="menu-item">我的学习</a>
        <a href="#" class="menu-item">我的课程</a>
        <a href="#" class="menu-item">模考系统</a>
      </div>
      <!-- 搜索按钮和搜索框 -->
      <div class="search-container">
        <span v-if="!isSearching" @click="toggleSearch" class="search-item">
          <SearchIcon />搜索
        </span>
        <div v-else class="search-box">
          <input 
            type="text" 
            placeholder="请输入" 
            v-model="searchInput"
          />
          <!-- 将搜索图标放在 input 后面 -->
          <span 
            class="search-icon" 
            @click="handleSearch"
            style="pointer-events: auto;"
          >
            <SearchIcon />
          </span>
          <!-- 阻止事件冒泡 -->
          <span @click.stop="toggleSearch" class="search-item">取消</span> 
        </div>
      </div>
    </div>
    <!-- <t-divider layout="vertical" /> -->
    <div class="navbar-menu2">
      <a href="#" class="menu-item2">&nbsp;&nbsp;|&nbsp;&nbsp;学习记录&nbsp;&nbsp;|&nbsp;&nbsp;</a>
      <!-- <t-divider layout="vertical" /> -->
      <a href="#" class="menu-item2">我的订阅</a>
      <div class="login-button">
        <span class="login-text">登录</span>
      </div>
    </div> 
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { SearchIcon } from 'tdesign-icons-vue-next';

// 定义响应式变量，用于控制搜索栏的显示与隐藏
const isSearching = ref(false);
// 定义输入框内容的响应式变量
const searchInput = ref('');
// 定义是否显示警示信息的响应式变量
const showAlert = ref(false);
// 定义是否正在淡出的响应式变量
const isFading = ref(false);

// 切换搜索栏显示状态的函数
const toggleSearch = () => {
  isSearching.value = !isSearching.value;
  showAlert.value = false; // 切换时隐藏警示信息
  isFading.value = false;
};

// 监听 showAlert 的变化
watch(showAlert, (newValue) => {
  if (newValue) {
    // 2 秒后开始淡出
    setTimeout(() => {
      isFading.value = true;
      // 1 秒后隐藏警示信息
      setTimeout(() => {
        showAlert.value = false;
        isFading.value = false;
      }, 1000);
    }, 2000);
  }
});

// 搜索函数
const handleSearch = () => {
  if (searchInput.value.trim() === '') {
    showAlert.value = true; // 显示警示信息
    isFading.value = false;
  } else {
    showAlert.value = false; // 隐藏警示信息
    isFading.value = false;
    // 这里添加实际的搜索逻辑
    console.log('执行搜索，关键词：', searchInput.value);
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 72px;
  background-color: #fff; /* 导航栏保持白色 */
  display: flex; /* 使用 flex 布局 */
  flex-direction: row; /* 水平排列 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  padding: 1rem; /* 添加内边距 */
  box-sizing: border-box; /* 包含内边距在宽度内 */
}

.navbar-image {
  width: 40px; /* 放大图片，可按需调整 */
  height: 40px; /* 保持图片比例 */
  display: block;
  line-height: 40px; /* 设置行高与图片高度一致 */
  margin-right: 74px; /* 添加右边距 */
  object-fit: cover; /* 保持图片比例并覆盖容器 */
}

.navbar-menu {
  flex-shrink: 0;
  margin: 16px 0px 16px 0;
  line-height: 40px;
  cursor: pointer;
  display: flex; /* 启用 Flex 布局 */
  align-items: center; /* 垂直居中 */
  width: 685px;
  justify-content: space-between; /* 让菜单项和搜索按钮分布在两端 */
}

.menu-items {
  display: flex;
  align-items: center;
}

.navbar-menu2 {
  display: flex; /* 启用 Flex 布局 */
  align-items: center; /* 垂直居中 */
}

.menu-item {
  margin-right: 24px;
  visibility: visible;
  opacity: 1;
  transform-origin: center;
  line-height: 72px;
  color: rgb(102, 102, 102);
  font-size: 16px;
  height: 100%;
  text-decoration: none;
  font-weight: bolder;
  --max-width-style: 686px; /* 设置最大宽度 */
}

.menu-item:hover {
  color: #007bff;
}

.menu-item2 {
  /*margin-right: 24px;*/
  visibility: visible;
  opacity: 1;
  transform-origin: center;
  line-height: 72px;
  color: rgb(102, 102, 102);
  font-size: 16px;
  height: 100%;
  /*width: 72px;*/
  text-decoration: none;
}

.search-item {
  visibility: visible;
  opacity: 1;
  transform-origin: center;
  line-height: 72px;
  color: rgb(102, 102, 102);
  font-size: 16px;
  height: 100%;
  text-decoration: none;
}

.login-button {
  display: flex;
  align-items: center;
  margin-left: 24px;
}

.login-text {
  cursor: pointer;
  padding: 3px 22px;
  border: 1px solid;
  border-radius: 4px;
  color: #14be82 !important;
}

.search-container {
  cursor: pointer;
}

.search-box {
  display: flex;
  align-items: center;
  position: relative;
  left: 465px; /* 调整此值来控制右移距离 */
}

.search-box input {
  padding: 0.5rem 2rem 0.5rem 0.5rem; /* 增大右内边距，为图标腾出空间 */
  border: 1px solid #ccc; /* 边框 */
  border-radius: 4px;
  margin-right: 0px; /* 右边距 */
  width: 150px;
}

.search-icon {
  position: absolute; /* 绝对定位 */
  right: 40px; /* 距离 input 右侧的距离 */
  top: 50%; /* 垂直居中 */
  transform: translateY(-50%); /* 垂直居中微调 */
  pointer-events: auto; /* 允许图标点击 */
  cursor: pointer; /* 鼠标悬停显示手型 */
}
</style>