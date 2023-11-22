<!--
 * @Author: zwz
 * @Date: 2023-08-07 16:27:12
 * @LastEditors: zwz
 * @LastEditTime: 2023-11-22 22:46:57
 * @Description: 请填写简介
-->
<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 滚动容器 -->
  <!-- <scroll-view enable-back-to-top refresher-enabled class="scroll-view" scroll-y> </scroll-view> -->
  <view class="index">index</view>
</template>

<script setup lang="ts">
import CustomNavbar from '@/components/CustomNavbar.vue'
</script>

<style lang="scss">
// page {
//   background-color: #f7f7f7;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
// }
// .scroll-view {
//   flex: 1;
// }
</style>
