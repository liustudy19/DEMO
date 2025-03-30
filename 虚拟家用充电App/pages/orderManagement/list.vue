<template>
  <view class="container">
    <view class="header">
      <text>订单列表</text>
    </view>
    <view class="order-list">
      <view v-for="order in orders" :key="order.id" class="order-item" @click="goToOrderDetail(order.id)">
        <text>订单号: {{ order.orderNumber }}</text>
        <text>下单时间: {{ order.orderDate }}</text>
        <text>状态: {{ order.status }}</text>
      </view>
    </view>
    <view class="bottom-menu">
      <button @click="goToHome">首页</button>
      <button @click="goToProfile">个人中心</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        { id: 1, orderNumber: '123456789', orderDate: '2023-10-01', status: '已支付' },
        { id: 2, orderNumber: '987654321', orderDate: '2023-10-02', status: '待支付' },
		{ id: 3, orderNumber: '123456789', orderDate: '2023-10-02', status: '已超时' },
		{ id: 4, orderNumber: '123456789', orderDate: '2023-10-02', status: '已支付' },
		{ id: 5, orderNumber: '123456789', orderDate: '2023-10-07', status: '待支付' },
		{ id: 6, orderNumber: '123456789', orderDate: '2023-10-08', status: '已支付' },
		{ id: 7, orderNumber: '123456789', orderDate: '2023-10-10', status: '已支付' },
		{ id: 8, orderNumber: '123456789', orderDate: '2023-10-21', status: '已超时' },
		{ id: 9, orderNumber: '123456789', orderDate: '2023-10-23', status: '已支付' },
		{ id: 10, orderNumber: '123456789', orderDate: '2023-11-01', status: '待支付' },
		{ id: 11, orderNumber: '123456789', orderDate: '2023-11-04', status: '待支付' },
		{ id: 12, orderNumber: '123456789', orderDate: '2023-10-11', status: '已支付' },
      ]
    };
  },
  methods: {
    goToOrderDetail(orderId) {
      uni.navigateTo({
        url: `/pages/orderManagement/detail?id=${orderId}`
      });
    },
    goToHome() {
      uni.reLaunch({
        url: '/pages/smartChargingHome/index'
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

.order-list {
  width: 100%;
  max-width: 600px;
}

.order-item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

.order-item:hover {
  background-color: #f0f0f0;
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

text {
  margin: 5px;
  font-size: 16px;
}
</style>