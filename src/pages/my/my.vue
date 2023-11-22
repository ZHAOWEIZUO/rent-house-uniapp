<!--
 * @Author: zwz
 * @Date: 2023-06-19 18:40:28
 * @LastEditors: zwz
 * @LastEditTime: 2023-11-22 07:15:45
 * @Description: 请填写简介
-->
<template>
  <view class="my">
    <view>会员信息: {{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马',
        })
      "
      size="mini"
      :plain="true"
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getDate" size="mini">请求测试</button>
  </view>
</template>
<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { postLoginWxMinAPI } from '@/services/login'

const memberStore = useMemberStore()
import { onLoad } from '@dcloudio/uni-app'
let code = ''
onLoad(async () => {
  const res = await wx.login()
  code = res.code
})
const onGetphonenumber: UniHelper.ButtonOnGetphonenumber = async (ev) => {
  const encryptedData = ev.detail?.encryptedData!
  const iv = ev.detail?.iv!
  const res = await postLoginWxMinAPI({
    code,
    encryptedData,
    iv,
  })
}

const getDate = () => {}
</script>
