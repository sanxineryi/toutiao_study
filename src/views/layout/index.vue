<template>
  <div class="layout_container">
    <!-- 路由占位 -->
    <router-view></router-view>
    <!-- 底部tabbar -->
    <van-tabbar route>
      <van-tabbar-item to="/home">
        <i slot="icon" class="toutiao toutiao-shouye"></i>
        <span class="text">首页</span></van-tabbar-item
      >
      <van-tabbar-item to="/qa">
        <i slot="icon" class="toutiao toutiao-wenda"></i>
        <span class="text">问答</span></van-tabbar-item
      >
      <van-tabbar-item to="/video">
        <i slot="icon" class="toutiao toutiao-shipin"></i>
        <span class="text">视频</span></van-tabbar-item
      >
      <van-tabbar-item to="/my">
        <i slot="icon" class="toutiao toutiao-wode"></i>
        <span class="text">{{
          $store.state.userInfo.user ? "我的" : "未登录"
        }}</span></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage',
  mounted () {
    console.log(this.$store.state.userInfo.user)
  }
}
</script>

<style lang="less" scoped>
i.toutiao {
  font-size: 40px;
}
span.text {
  font-size: 20px;
}
</style>
