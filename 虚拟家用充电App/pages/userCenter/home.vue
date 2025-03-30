<template>
  <view class="navbar">
    <input type="checkbox" id="checkbox">
    <label for="checkbox">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </label>
    <ul>
      <li>
        <img src="/static/images/1.png" alt="">
        <span>欢迎您！管理员</span>
      </li>
      <li>
        <a href="javascript:void(0)" @click="goToHomePage">
          <i class="fa fa-home" aria-hidden="true"></i>
          <span>后台首页</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)">
          <i class="fa fa-sitemap" aria-hidden="true"></i>
          <span>商品列表</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          <span>用户列表</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="showOrderList">
          <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          <span>订单列表</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)">
          <i class="fa fa-th-large" aria-hidden="true"></i>
          <span>功能列表</span>
        </a>
      </li>
    </ul>
    <div class="main">
      <component :is="currentComponent"></component>
    </div>
  </view>
</template>


<script>
import OrderDetail from '@/pages/orderManagement/detail.vue';

export default {
  data() {
    return {
      currentComponent: 'defaultContent'
    };
  },
  components: {
    OrderDetail,
    defaultContent: {
      template: `<div><text>我是内容区</text></div>`
    }
  },
  methods: {
    goToHomePage() {
      // 使用uni-app的API进行页面跳转
      uni.navigateTo({
        url: '/pages/smartChargingHome/index'
      });
    },
    showOrderList() {
      // 显示订单列表内容
      this.currentComponent = 'OrderDetail';
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  overflow: hidden;
}
.navbar {
  position: relative;
  width: 100vw;
  display: flex;
}
.main {
  flex: 1;
  height: calc(100vh - 43px);
  position: relative;
  top: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#checkbox {
  display: none;
}
.navbar label {
  position: absolute;
  top: 0;
  left: 70px;
  width: 100%;
  height: 43px;
  font-size: 30px;
  color: #5a738e;
  background-color: #ededed;
  padding-left: 20px;
  border: 1px solid #d9dee4;
  cursor: pointer;
  transition: all 0.5s;
}
.navbar ul {
  list-style: none;
  width: 70px;
  height: 100vh;
  background-color: #2a3f54;
  transition: all 0.5s;
  overflow: hidden;
}
.navbar ul li {
  height: 70px;
  margin-bottom: 10px;
}
.navbar ul li:first-child {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}
.navbar ul li:first-child img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.navbar ul li:first-child span {
  color: #fff;
  white-space: nowrap;
  display: none;
}
.navbar ul li a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #d1d1d1;
  text-decoration: none;
}
.navbar ul li a i {
  font-size: 25px;
  margin-bottom: 10px;
}
.navbar ul li a span {
  font-size: 12px;
  white-space: nowrap;
}
.navbar ul li a:hover {
  color: #fff;
  background-color: #35495d;
}
.navbar input:checked + label {
  left: 200px;
}
.navbar input:checked ~ ul {
  width: 200px;
}
.navbar input:checked ~ ul li:first-child {
  justify-content: flex-start;
}
.navbar input:checked ~ ul li:first-child span {
  display: block;
}
.navbar input:checked ~ ul li a {
  flex-direction: row;
  justify-content: flex-start;
}
.navbar input:checked ~ ul li a i {
  font-size: 18px;
  margin: 0 15px 0 30px;
}
.navbar input:checked ~ ul li a span {
  font-size: 14px;
}
</style>