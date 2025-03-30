<template>
  <view class="container">
    <view class="header">
      <text class="title">智能充电调度</text>
    </view>
    <view class="schedule-container">
      <view class="schedule-section">
        <text class="section-title">当前充电计划</text>
        <view v-for="(plan, index) in chargingPlans" :key="index" class="plan-item">
          <view class="plan-header">
            <text class="plan-title">{{ plan.vehicleName }}</text>
            <text :class="['plan-status', plan.status === '执行中' ? 'running' : plan.status === '已完成' ? 'completed' : 'pending']">{{ plan.status }}</text>
          </view>
          <view class="plan-details">
            <text>充电桩: {{ plan.chargerName }}</text>
            <text>开始时间: {{ plan.startTime }}</text>
            <text>预计结束: {{ plan.endTime }}</text>
            <text>目标电量: {{ plan.targetBattery }}%</text>
            <text>当前电量: {{ plan.currentBattery }}%</text>
          </view>
          <view class="plan-actions">
            <button class="action-btn pause" @click="pausePlan(plan)" v-if="plan.status === '执行中'">暂停</button>
            <button class="action-btn start" @click="startPlan(plan)" v-if="plan.status === '待执行'">开始</button>
            <button class="action-btn cancel" @click="cancelPlan(plan)">取消</button>
          </view>
        </view>
      </view>
      <view class="schedule-section">
        <text class="section-title">创建充电计划</text>
        <view class="form-group">
          <text class="label">选择车辆</text>
          <picker class="select" :range="vehicles" range-key="name" @change="onVehicleChange">
            <view class="picker-text">{{ selectedVehicle ? selectedVehicle.name : '请选择车辆' }}</view>
          </picker>
        </view>
        <view class="form-group">
          <text class="label">选择充电桩</text>
          <picker class="select" :range="chargers" range-key="name" @change="onChargerChange">
            <view class="picker-text">{{ selectedCharger ? selectedCharger.name : '请选择充电桩' }}</view>
          </picker>
        </view>
        <view class="form-group">
          <text class="label">目标电量(%)</text>
          <slider :value="targetBattery" :min="20" :max="100" :step="5" show-value @change="onTargetBatteryChange" />
        </view>
        <view class="form-group">
          <text class="label">期望完成时间</text>
          <picker mode="time" :value="expectedEndTime" @change="onTimeChange">
            <view class="picker-text">{{ expectedEndTime || '请选择时间' }}</view>
          </picker>
        </view>
        <button class="submit-btn" @click="createPlan">创建计划</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      chargingPlans: [
        {
          id: 1,
          vehicleName: '特斯拉 Model 3',
          chargerName: '家用充电桩1',
          startTime: '2024-01-20 22:00',
          endTime: '2024-01-21 06:00',
          targetBattery: 90,
          currentBattery: 45,
          status: '执行中'
        },
        {
          id: 2,
          vehicleName: '比亚迪 汉',
          chargerName: '家用充电桩2',
          startTime: '2024-01-21 01:00',
          endTime: '2024-01-21 07:00',
          targetBattery: 85,
          currentBattery: 30,
          status: '待执行'
        }
      ],
      vehicles: [
        { id: 1, name: '特斯拉 Model 3' },
        { id: 2, name: '比亚迪 汉' }
      ],
      chargers: [
        { id: 1, name: '家用充电桩1' },
        { id: 2, name: '家用充电桩2' }
      ],
      selectedVehicle: null,
      selectedCharger: null,
      targetBattery: 80,
      expectedEndTime: ''
    };
  },
  methods: {
    onVehicleChange(e) {
      this.selectedVehicle = this.vehicles[e.detail.value];
    },
    onChargerChange(e) {
      this.selectedCharger = this.chargers[e.detail.value];
    },
    onTargetBatteryChange(e) {
      this.targetBattery = e.detail.value;
    },
    onTimeChange(e) {
      this.expectedEndTime = e.detail.value;
    },
    createPlan() {
      if (!this.selectedVehicle || !this.selectedCharger || !this.expectedEndTime) {
        uni.showToast({
          title: '请填写完整信息',
          icon: 'none'
        });
        return;
      }
      // 这里添加创建充电计划的逻辑
      const plan = {
        id: Date.now(),
        vehicleName: this.selectedVehicle.name,
        chargerName: this.selectedCharger.name,
        startTime: new Date().toLocaleString(),
        endTime: `2024-01-21 ${this.expectedEndTime}`,
        targetBattery: this.targetBattery,
        currentBattery: 30,
        status: '待执行'
      };
      this.chargingPlans.push(plan);
      uni.showToast({
        title: '创建成功',
        icon: 'success'
      });
      // 重置表单
      this.selectedVehicle = null;
      this.selectedCharger = null;
      this.targetBattery = 80;
      this.expectedEndTime = '';
    },
    startPlan(plan) {
      const index = this.chargingPlans.findIndex(item => item.id === plan.id);
      if (index !== -1) {
        this.chargingPlans[index].status = '执行中';
        uni.showToast({
          title: '计划已启动',
          icon: 'success'
        });
      }
    },
    pausePlan(plan) {
      const index = this.chargingPlans.findIndex(item => item.id === plan.id);
      if (index !== -1) {
        this.chargingPlans[index].status = '待执行';
        uni.showToast({
          title: '计划已暂停',
          icon: 'success'
        });
      }
    },
    cancelPlan(plan) {
      uni.showModal({
        title: '确认取消',
        content: '确定要取消该充电计划吗？',
        success: (res) => {
          if (res.confirm) {
            const index = this.chargingPlans.findIndex(item => item.id === plan.id);
            if (index !== -1) {
              this.chargingPlans.splice(index, 1);
              uni.showToast({
                title: '计划已取消',
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
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.schedule-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.schedule-section {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-bottom: 16px;
}

.plan-item {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
}

.plan-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.plan-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.plan-status {
  font-size: 14px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
}

.plan-status.running {
  background-color: #e6f7ff;
  color: #1890ff;
}

.plan-status.completed {
  background-color: #f6ffed;
  color: #52c41a;
}

.plan-status.pending {
  background-color: #fff7e6;
  color: #faad14;
}

.plan-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
}

.plan-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  border: none;
}

.action-btn.start {
  background-color: #52c41a;
  color: #fff;
}

.action-btn.pause {
  background-color: #faad14;
  color: #fff;
}

.action-btn.cancel {
  background-color: #ff4d4f;
  color: #fff;
}

.form-group {
  margin-bottom: 16px;
}

.label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
}

.select {
  width: 100%;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
}

.picker-text {
  line-height: 40px;
  padding: 0 15px;
  font-size: 14px;
  color: #333;
}

.submit-btn {
  width: 100%;
  height: 44px;
  background-color: #007aff;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  border: none;
  margin-top: 20px;
}

.submit-btn:active {
  opacity: 0.8;
}
</style>