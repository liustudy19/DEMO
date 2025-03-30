<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{title}}</text>
      <br><br>&nbsp;&nbsp;&nbsp;
      <text class="title">{{title2}}</text>
    </view>
    <!-- 底部导航栏 -->
    <view class="bottom-nav">
      <navigator url="/pages/smartChargingHome/index" hover-class="none">
        <text>首页</text>
      </navigator>
      <navigator url="/pages/orderManagement/list" hover-class="none">
        <text>订单</text>
      </navigator>
      <navigator url="/pages/userCenter/home" hover-class="none">
        <text>个人中心</text>
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  data() {
		return {
		  title: 'Hello',
		  title2: '欢迎光临充电App'
		}
	}
  }
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - env(safe-area-inset-bottom));
  padding-bottom: env(safe-area-inset-bottom); /* 适配安全区域 */
  background-color: #f7f7f7; /* 设置背景颜色 */
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.action-button {
  margin: 10px 0;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #1aad19;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.action-button:active {
  background-color: #189b17;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10rpx 0;
  border-top: 1px solid #eaeaea;
  background-color: white;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}

.bottom-nav navigator {
  flex: 1;
  text-align: center;
}

.bottom-nav text {
  font-size: 30rpx;
  line-height: 1.5;
  color: #333;
}
</style>