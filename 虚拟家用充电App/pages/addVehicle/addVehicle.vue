<template>
  <view class="container">
    <view class="header">
      <text class="title">添加车辆</text>
    </view>
    <view class="form-container">
      <view class="form-group">
        <text class="label">车牌号</text>
        <input class="input" placeholder="请输入车牌号" />
      </view>
      <view class="form-group">
        <text class="label">品牌</text>
        <input class="input" placeholder="请输入品牌" />
      </view>
      <view class="form-group">
        <text class="label">型号</text>
        <input class="input" placeholder="请输入型号" />
      </view>
      <view class="form-group">
        <text class="label">续航里程</text>
        <input class="input" type="number" placeholder="请输入续航里程" />
      </view>
      <button class="submit-btn" @click="submitForm">提交</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      uni.showToast({
        title: '提交成功',
        icon: 'success'
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f8f8f8;
  height: 100vh;
}

.header {
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 15px;
}

.label {
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #1aad19;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.submit-btn:active {
  background-color: #189b17;
}
</style>