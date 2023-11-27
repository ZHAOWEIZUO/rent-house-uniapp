<!--
 * @Author: zwz
 * @Date: 2023-11-23 16:12:10
 * @LastEditors: zwz
 * @LastEditTime: 2023-11-23 16:16:59
 * @Description: 请填写简介
-->
<template>
  <view>
    <uni-indexed-list :options="list" :showSelect="false" @click="bindClick"></uni-indexed-list>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const list = ref([
  {
    letter: 'A',
    data: [
      '阿克苏机场',
      '阿拉山口机场',
      '阿勒泰机场',
      '阿里昆莎机场',
      '安庆天柱山机场',
      '澳门国际机场',
    ],
  },
  {
    letter: 'B',
    data: ['保山机场', '包头机场', '北海福成机场', '北京南苑机场', '北京首都国际机场'],
  },
])
const bindClick = () => {}
</script>

<style lang="scss" scoped></style>
