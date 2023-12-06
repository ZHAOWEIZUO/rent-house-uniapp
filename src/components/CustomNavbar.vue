<!--
 * @Author: zwz
 * @Date: 2023-08-07 14:57:44
 * @LastEditors: zwz
 * @LastEditTime: 2023-12-06 10:26:32
 * @Description: 请填写简介
-->
<script setup lang="ts">
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <!-- logo文字 -->
    <view class="logo">
      <!-- <image class="logo-image" src="@/static/images/logo.png"></image> -->
      <!-- <text class="logo-text"> · 亲民 · 快捷</text> -->
    </view>
    <!-- 搜索条 -->
    <view class="search">
      <!-- <text class="icon-search">你想住哪里？</text>
      <text class="icon-scan"></text> -->
      <uni-search-bar placeholder="自定义背景色" bgColor="#EEEEEE" />
    </view>
  </view>
</template>

<style lang="scss">
/* 自定义导航条 */
.navbar {
  background-image: url(@/static/images/home.png);
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding-left: 30rpx;
    .logo-image {
      width: 166rpx;
      height: 39rpx;
    }
    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: #fff;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid #fff;
      font-size: 26rpx;
    }
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rpx 0 26rpx;
    height: 80rpx;
    margin: -40rpx 100rpx;
    margin-top: 200rpx;
    color: #000;
    font-size: 28rpx;
    border-radius: 50rpx;
    // background-color: rgba(255, 255, 255, 0.5);
    background: #fff;
    box-shadow: 2px 2px 2px 1px gray;
  }
  .icon-search {
    &::before {
      margin-right: 10rpx;
    }
  }
  .icon-scan {
    font-size: 30rpx;
    padding: 15rpx;
  }
}
</style>
