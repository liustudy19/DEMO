<template>
  <view class="splash-container">
    <view class="splash-content" @click="handleClick">
      <image class="app-icon" src="/static/icon.png"></image>
      <text class="app-name">充电App</text>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    handleClick() {
      // 点击图标后，等待一会时间再跳转到主页
      setTimeout(() => {
        uni.reLaunch({
          url: '/pages/index/index' // 指定要跳转的页面URL
        });
      }, 2000); // 2秒后跳转
    }
  }
}
</script>

<style>
.splash-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
}

.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.app-icon {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.app-name {
  font-size: 24px;
  color: #333;
}
</style>