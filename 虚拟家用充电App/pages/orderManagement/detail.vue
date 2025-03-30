<!-- <template>
  <view class="content">
    <view class="order-header">
      <text class="order-title">订单详情</text>
      <text class="order-id">订单编号: 20231024123456</text>
    </view>
    <view class="order-info">
      <view class="info-item">
        <text class="info-label">车辆信息:</text>
        <text class="info-value">特斯拉 Model 3</text>
      </view>
      <view class="info-item">
        <text class="info-label">充电站:</text>
        <text class="info-value">北京西站充电站</text>
      </view>
      <view class="info-item">
        <text class="info-label">充电时间:</text>
        <text class="info-value">2023-10-24 10:00 - 12:00</text>
      </view>
      <view class="info-item">
        <text class="info-label">充电金额:</text>
        <text class="info-value">120元</text>
      </view>
      <view class="info-item">
        <text class="info-label">支付方式:</text>
        <text class="info-value">微信支付</text>
      </view>
      <view class="info-item">
        <text class="info-label">订单状态:</text>
        <text class="info-value">已完成</text>
      </view>
    </view>
    <view class="order-actions">
      <button @click="cancelOrder" class="action-button">取消订单</button>
      <button @click="repeatOrder" class="action-button">再次下单</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    cancelOrder() {
      uni.showToast({ title: '订单已取消', icon: 'success' });
    },
    repeatOrder() {
      uni.showToast({ title: '再次下单成功', icon: 'success' });
    }
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
  padding: 20px;
}

.order-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.order-title {
  font-size: 24px;
  font-weight: bold;
}

.order-id {
  font-size: 16px;
  color: #555;
}

.order-info {
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.info-label {
  font-size: 16px;
  color: #333;
}

.info-value {
  font-size: 16px;
  color: #555;
}

.order-actions {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.action-button {
  margin: 0 10px;
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
</style> -->



<template>
  <view class="container">
    <view class="header">
      <text>订单详情</text>
    </view>
    <view class="order-detail">
      <text>订单号: {{ order.orderNumber }}</text>
      <text>下单时间: {{ order.orderDate }}</text>
      <text>状态: {{ order.status }}</text>
      <text>商品详情: {{ order.productDetails }}</text>
      <text>支付状态: {{ order.paymentStatus }}</text>
      <text>物流信息: {{ order.logisticsInfo }}</text>
    </view>
    <view class="bottom-menu">
      <button @click="goToOrderList">返回订单列表</button>
      <button @click="goToHome">首页</button>
      <button @click="goToProfile">个人中心</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      order: {}
    };
  },
  onLoad(options) {
    const orderId = options.id;
    // 假设这里从后端获取订单详情数据
    this.getOrderDetail(orderId);
  },
  methods: {
    getOrderDetail(orderId) {
      // 模拟从后端获取订单详情
      setTimeout(() => {
        this.order = {
          id: orderId,
          orderNumber: '123456789',
          orderDate: '2023-10-01',
          status: '已支付',
          productDetails: '特斯拉 Model 3',
          paymentStatus: '已支付',
          logisticsInfo: '已发货'
        };
      }, 1000);
    },
    goToOrderList() {
      this.$emit('change-component', 'defaultContent');
    },
    goToHome() {
      uni.reLaunch({
        url: '/pages/smartCharingHome/index'
      });
    },
    goToProfile() {
      uni.navigateTo({
        url: '/pages/userCenter/home'
      });
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
}

.header {
  width: 100%;
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.order-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.order-detail text {
  margin: 5px;
  font-size: 16px;
}

.bottom-menu {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #ccc;
}

.bottom-menu button {
  flex: 1;
  padding: 10px;
  font-size: 16px;
}
</style>