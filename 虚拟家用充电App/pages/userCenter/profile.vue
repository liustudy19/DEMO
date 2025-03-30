<template>
  <view class="container">
    <view class="header">
      <text class="title">个人中心</text>
    </view>
    <view class="profile-container">
      <view class="user-info">
        <image class="avatar" src="/static/images/avatar.png" mode="aspectFill"></image>
        <view class="user-details">
          <text class="username">{{ userInfo.username }}</text>
          <text class="user-id">ID: {{ userInfo.userId }}</text>
        </view>
      </view>
      <view class="menu-list">
        <view class="menu-section">
          <text class="section-title">账户管理</text>
          <view class="menu-item" @click="editProfile">
            <text>个人资料</text>
            <text class="arrow">></text>
          </view>
          <view class="menu-item" @click="goToWallet">
            <text>我的钱包</text>
            <text class="amount">¥{{ userInfo.balance }}</text>
            <text class="arrow">></text>
          </view>
          <view class="menu-item" @click="goToChargeRecords">
            <text>充电记录</text>
            <text class="arrow">></text>
          </view>
        </view>
        <view class="menu-section">
          <text class="section-title">消息中心</text>
          <view class="menu-item" @click="goToNotifications">
            <text>系统通知</text>
            <text class="badge" v-if="userInfo.unreadNotifications > 0">{{ userInfo.unreadNotifications }}</text>
            <text class="arrow">></text>
          </view>
          <view class="menu-item" @click="goToChargeAlerts">
            <text>充电提醒</text>
            <text class="badge" v-if="userInfo.unreadAlerts > 0">{{ userInfo.unreadAlerts }}</text>
            <text class="arrow">></text>
          </view>
        </view>
        <view class="menu-section">
          <text class="section-title">设置</text>
          <view class="menu-item" @click="goToSettings">
            <text>通用设置</text>
            <text class="arrow">></text>
          </view>
          <view class="menu-item" @click="goToHelp">
            <text>帮助与反馈</text>
            <text class="arrow">></text>
          </view>
          <view class="menu-item" @click="goToAbout">
            <text>关于我们</text>
            <text class="arrow">></text>
          </view>
        </view>
      </view>
      <button class="logout-btn" @click="logout">退出登录</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        username: '张三',
        userId: '10086',
        balance: 258.50,
        unreadNotifications: 3,
        unreadAlerts: 1
      }
    };
  },
  methods: {
    editProfile() {
      uni.navigateTo({
        url: '/pages/userCenter/editProfile'
      });
    },
    goToWallet() {
      uni.navigateTo({
        url: '/pages/userCenter/wallet'
      });
    },
    goToChargeRecords() {
      uni.navigateTo({
        url: '/pages/userCenter/chargeRecords'
      });
    },
    goToNotifications() {
      uni.navigateTo({
        url: '/pages/userCenter/notifications'
      });
    },
    goToChargeAlerts() {
      uni.navigateTo({
        url: '/pages/userCenter/chargeAlerts'
      });
    },
    goToSettings() {
      uni.navigateTo({
        url: '/pages/userCenter/settings'
      });
    },
    goToHelp() {
      uni.navigateTo({
        url: '/pages/userCenter/help'
      });
    },
    goToAbout() {
      uni.navigateTo({
        url: '/pages/userCenter/about'
      });
    },
    logout() {
      uni.showModal({
        title: '确认退出',
        content: '确定要退出登录吗？',
        success: (res) => {
          if (res.confirm) {
            // 这里添加退出登录的逻辑
            uni.reLaunch({
              url: '/pages/login/index'
            });
          }
        }
      });
    }
  }
};
</script>

<style>
.container {
  padding: 20px;
  background-color: #f8f8f8;
  min-height: 100vh;
}

.header {
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.profile-container {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.user-info {
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: #007aff;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #fff;
  margin-right: 16px;
}

.user-details {
  flex: 1;
}

.username {
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 4px;
}

.user-id {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}

.menu-list {
  padding: 16px 0;
}

.menu-section {
  margin-bottom: 16px;
}

.section-title {
  font-size: 16px;
  font-weight: 500;
  color: #999;
  padding: 0 20px;
  margin-bottom: 8px;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background-color: #fff;
  position: relative;
}

.menu-item:active {
  background-color: #f5f5f5;
}

.menu-item text {
  font-size: 16px;
  color: #333;
}

.arrow {
  margin-left: auto;
  color: #999;
}

.amount {
  margin-left: auto;
  margin-right: 8px;
  color: #ff6b00;
  font-weight: 500;
}

.badge {
  background-color: #ff4d4f;
  color: #fff;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: 8px;
}

.logout-btn {
  width: 100%;
  height: 44px;
  background-color: #ff4d4f;
  color: #fff;
  border: none;
  border-radius: 0;
  font-size: 16px;
}

.logout-btn:active {
  opacity: 0.8;
}
</style>