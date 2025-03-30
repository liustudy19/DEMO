<template>
  <view class="container">
    <view class="header">
      <text class="title">车辆管理</text>
      <button class="add-btn" @click="goToAdd">添加车辆</button>
    </view>
    <view class="vehicle-list">
      <view v-for="(vehicle, index) in vehicles" :key="index" class="vehicle-item">
        <view class="vehicle-info">
          <view class="vehicle-name">{{ vehicle.brand }} {{ vehicle.model }}</view>
          <view class="vehicle-details">
            <text>车牌号: {{ vehicle.licensePlate }}</text>
            <text>车辆类型: {{ vehicle.type }}</text>
            <text>电池容量: {{ vehicle.batteryCapacity }}kWh</text>
            <text>续航里程: {{ vehicle.range }}km</text>
            <text :class="['status', vehicle.chargingStatus === '充电中' ? 'charging' : vehicle.chargingStatus === '已充满' ? 'full' : 'not-charging']">状态: {{ vehicle.chargingStatus }}</text>
          </view>
        </view>
        <view class="vehicle-actions">
          <button class="action-btn charge" @click="startCharging(vehicle)" v-if="vehicle.chargingStatus === '未充电'">开始充电</button>
          <button class="action-btn stop" @click="stopCharging(vehicle)" v-if="vehicle.chargingStatus === '充电中'">停止充电</button>
          <button class="action-btn edit" @click="editVehicle(vehicle)">编辑</button>
          <button class="action-btn delete" @click="deleteVehicle(vehicle)">删除</button>
        </view>
      </view>
      <view v-if="vehicles.length === 0" class="empty-state">
        <text>暂无车辆数据</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      vehicles: [
        {
          id: 1,
          brand: '特斯拉',
          model: 'Model 3',
          licensePlate: '京A12345',
          type: '纯电动',
          batteryCapacity: 75,
          range: 500,
          chargingStatus: '未充电'
        },
        {
          id: 2,
          brand: '比亚迪',
          model: '汉',
          licensePlate: '京B67890',
          type: '纯电动',
          batteryCapacity: 80,
          range: 550,
          chargingStatus: '充电中'
        }
      ]
    };
  },
  methods: {
    goToAdd() {
      uni.navigateTo({
        url: '/pages/addVehicle/addVehicle'
      });
    },
    editVehicle(vehicle) {
      uni.navigateTo({
        url: `/pages/addVehicle/addVehicle?id=${vehicle.id}`
      });
    },
    deleteVehicle(vehicle) {
      uni.showModal({
        title: '确认删除',
        content: '确定要删除该车辆吗？',
        success: (res) => {
          if (res.confirm) {
            const index = this.vehicles.findIndex(item => item.id === vehicle.id);
            if (index !== -1) {
              this.vehicles.splice(index, 1);
              uni.showToast({
                title: '删除成功',
                icon: 'success'
              });
            }
          }
        }
      });
    },
    startCharging(vehicle) {
      uni.showModal({
        title: '开始充电',
        content: '确定要开始为该车辆充电吗？',
        success: (res) => {
          if (res.confirm) {
            const index = this.vehicles.findIndex(item => item.id === vehicle.id);
            if (index !== -1) {
              this.vehicles[index].chargingStatus = '充电中';
              uni.showToast({
                title: '已开始充电',
                icon: 'success'
              });
            }
          }
        }
      });
    },
    stopCharging(vehicle) {
      uni.showModal({
        title: '停止充电',
        content: '确定要停止充电吗？',
        success: (res) => {
          if (res.confirm) {
            const index = this.vehicles.findIndex(item => item.id === vehicle.id);
            if (index !== -1) {
              this.vehicles[index].chargingStatus = '已充满';
              uni.showToast({
                title: '已停止充电',
                icon: 'success'
              });
            }
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.add-btn {
  background-color: #007aff;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  border: none;
}

.vehicle-list {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.vehicle-item {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vehicle-item:last-child {
  border-bottom: none;
}

.vehicle-info {
  flex: 1;
}

.vehicle-name {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.vehicle-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  color: #666;
}

.status {
  font-weight: 500;
}

.status.charging {
  color: #1890ff;
}

.status.full {
  color: #52c41a;
}

.status.not-charging {
  color: #999;
}

.vehicle-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  border: none;
}

.action-btn.charge {
  background-color: #52c41a;
  color: #fff;
}

.action-btn.stop {
  background-color: #faad14;
  color: #fff;
}

.action-btn.edit {
  background-color: #1890ff;
  color: #fff;
}

.action-btn.delete {
  background-color: #ff4d4f;
  color: #fff;
}

.empty-state {
  padding: 40px;
  text-align: center;
  color: #999;
  font-size: 16px;
}
</style>