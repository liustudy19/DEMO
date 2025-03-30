<template>
  <view class="container">
    <view class="header">
      <text class="title">添加充电桩</text>
    </view>
    <view class="form-container">
      <view class="form-group">
        <text class="label">充电桩名称</text>
        <input class="input" v-model="formData.name" placeholder="请输入充电桩名称" />
        <text class="error" v-if="errors.name">{{ errors.name }}</text>
      </view>
      <view class="form-group">
        <text class="label">地址</text>
        <input class="input" v-model="formData.address" placeholder="请输入地址" />
        <text class="error" v-if="errors.address">{{ errors.address }}</text>
      </view>
      <view class="form-group">
        <text class="label">充电桩类型</text>
        <picker class="select" :range="chargerTypes" @change="onTypeChange">
          <view class="picker-text">{{ formData.type || '请选择充电桩类型' }}</view>
        </picker>
        <text class="error" v-if="errors.type">{{ errors.type }}</text>
      </view>
      <view class="form-group">
        <text class="label">充电桩数量</text>
        <input class="input" type="number" v-model="formData.quantity" placeholder="请输入充电桩数量" />
        <text class="error" v-if="errors.quantity">{{ errors.quantity }}</text>
      </view>
      <view class="form-group">
        <text class="label">功率(kW)</text>
        <input class="input" type="number" v-model="formData.power" placeholder="请输入充电功率" />
        <text class="error" v-if="errors.power">{{ errors.power }}</text>
      </view>
      <view class="form-group">
        <text class="label">状态</text>
        <picker class="select" :range="statusOptions" @change="onStatusChange">
          <view class="picker-text">{{ formData.status || '请选择状态' }}</view>
        </picker>
        <text class="error" v-if="errors.status">{{ errors.status }}</text>
      </view>
      <button class="submit-btn" @click="submitForm">提交</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        address: '',
        type: '',
        quantity: '',
        power: '',
        status: ''
      },
      errors: {},
      chargerTypes: ['快充', '慢充', 'SuperCharge'],
      statusOptions: ['在线', '离线', '维护中']
    };
  },
  methods: {
    onTypeChange(e) {
      this.formData.type = this.chargerTypes[e.detail.value];
    },
    onStatusChange(e) {
      this.formData.status = this.statusOptions[e.detail.value];
    },
    validateForm() {
      this.errors = {};
      if (!this.formData.name) {
        this.errors.name = '请输入充电桩名称';
      }
      if (!this.formData.address) {
        this.errors.address = '请输入地址';
      }
      if (!this.formData.type) {
        this.errors.type = '请选择充电桩类型';
      }
      if (!this.formData.quantity) {
        this.errors.quantity = '请输入充电桩数量';
      } else if (parseInt(this.formData.quantity) <= 0) {
        this.errors.quantity = '充电桩数量必须大于0';
      }
      if (!this.formData.power) {
        this.errors.power = '请输入充电功率';
      } else if (parseFloat(this.formData.power) <= 0) {
        this.errors.power = '充电功率必须大于0';
      }
      if (!this.formData.status) {
        this.errors.status = '请选择状态';
      }
      return Object.keys(this.errors).length === 0;
    },
    submitForm() {
      if (this.validateForm()) {
        // 这里添加与后端API的交互
        console.log('提交的数据：', this.formData);
        uni.showToast({
          title: '提交成功',
          icon: 'success'
        });
        // 提交成功后跳转到充电桩列表页面
        setTimeout(() => {
          uni.navigateBack();
        }, 1500);
      }
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  min-height: 100vh;
}

.header {
  margin-bottom: 30px;
  width: 100%;
}

.title {
  font-size: 24px;
  color: #333;
  font-weight: bold;
}

.form-container {
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  width: 100%;
  margin-bottom: 20px;
}

.label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

.input {
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
}

.input:focus {
  border-color: #007aff;
  outline: none;
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

.error {
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 4px;
}

.submit-btn {
  width: 100%;
  height: 44px;
  margin-top: 30px;
  background-color: #007aff;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}

.submit-btn:active {
  opacity: 0.8;
}
</style>