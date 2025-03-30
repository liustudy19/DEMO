<template>
  <view class="container">
    <view class="header">
      <text class="title">充电桩管理</text>
      <button class="add-btn" @click="goToAdd">添加充电桩</button>
    </view>
    <view class="charger-list">
      <view v-for="(charger, index) in chargers" :key="index" class="charger-item">
        <view class="charger-info">
          <view class="charger-name">{{ charger.name }}</view>
          <view class="charger-details">
            <text>地址: {{ charger.address }}</text>
            <text>类型: {{ charger.type }}</text>
            <text>数量: {{ charger.quantity }}个</text>
            <text>功率: {{ charger.power }}kW</text>
            <text :class="['status', charger.status === '在线' ? 'online' : charger.status === '离线' ? 'offline' : 'maintenance']">状态: {{ charger.status }}</text>
          </view>
        </view>
        <view class="charger-actions">
          <button class="action-btn edit" @click="editCharger(charger)">编辑</button>
          <button class="action-btn delete" @click="deleteCharger(charger)">删除</button>
        </view>
      </view>
      <view v-if="chargers.length === 0" class="empty-state">
        <text>暂无充电桩数据</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      chargers: [
        {
          name: '示例充电桩1',
          address: '北京市海淀区西二旗大街1号',
          type: '快充',
          quantity: 2,
          power: 60,
          status: '在线'
        },
        {
          name: '示例充电桩2',
          address: '北京市朝阳区建国路2号',
          type: 'SuperCharge',
          quantity: 1,
          power: 120,
          status: '维护中'
        }
      ]
    };
  },
  methods: {
    goToAdd() {
      uni.navigateTo({
        url: '/pages/addCharger/addCharger'
      });
    },
    editCharger(charger) {
      // 跳转到编辑页面，并传递充电桩数据
      uni.navigateTo({
        url: `/pages/addCharger/addCharger?id=${charger.id}`
      });
    },
    deleteCharger(charger) {
      uni.showModal({
        title: '确认删除',
        content: '确定要删除该充电桩吗？',
        success: (res) => {
          if (res.confirm) {
            // 这里添加删除充电桩的逻辑
            const index = this.chargers.findIndex(item => item.id === charger.id);
            if (index !== -1) {
              this.chargers.splice(index, 1);
              uni.showToast({
                title: '删除成功',
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

.charger-list {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.charger-item {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.charger-item:last-child {
  border-bottom: none;
}

.charger-info {
  flex: 1;
}

.charger-name {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.charger-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  color: #666;
}

.status {
  font-weight: 500;
}

.status.online {
  color: #52c41a;
}

.status.offline {
  color: #ff4d4f;
}

.status.maintenance {
  color: #faad14;
}

.charger-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  border: none;
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