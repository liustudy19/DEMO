<template>
  <view class="container">
    <view class="header">
      <text>智能充电家用版</text>
    </view>
    <view class="vehicle-info">
      <text>车辆外观: <image :src="vehicleImage" class="vehicle-image"></image></text>
      <text>车牌: {{ vehicleLicense }}</text>
      <text>品牌: {{ vehicleBrand }}</text>
      <text>型号: {{ vehicleModel }}</text>
      <text>续航里程: {{ vehicleRange }} km</text>
    </view>
    <view class="function-buttons">
      <button @click="navigateToAddCharger">添加充电桩</button>
      <button @click="navigateToAddVehicle">添加车辆</button>
    </view>
    <view class="bottom-menu">
      <button @click="goToHome">首页</button>
      <button @click="goToOrderList">订单</button>
      <button @click="goToProfile">个人中心</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      vehicleImage: '/static/images/vehicle.jpg', // 替换为实际的车辆图片路径
      vehicleLicense: '京A12345',
      vehicleBrand: '特斯拉',
      vehicleModel: 'Model 3',
      vehicleRange: 500
    };
  },
  methods: {
    navigateToAddCharger() {
      uni.navigateTo({
        url: '/pages/addCharger/addCharger'
      });
    },
    navigateToAddVehicle() {
      uni.navigateTo({
        url: '/pages/addVehicle/addVehicle'
      });
    },
    goToHome() {
      uni.reLaunch({
        url: '/pages/smartChargingHome/index'
      });
    },
    goToOrderList() {
      uni.navigateTo({
        url: '/pages/orderManagement/list'
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

.vehicle-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.vehicle-image {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

.function-buttons {
  display: flex;
  margin-bottom: 20px;
}

.function-buttons button {
  margin: 0 10px;
  padding: 10px 20px;
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

text {
  margin: 5px;
  font-size: 16px;
}
</style>