<template>
  <div class="follow-btn">
    <van-button
      v-if="!article.is_followed"
      class="follow-btn"
      type="info"
      color="#3296fa"
      round
      size="small"
      icon="plus"
      @click="onFollow"
      :loading="isFollowLoading"
      >关注</van-button
    >
    <van-button
      class="follow-btn"
      round
      size="small"
      v-else
      @click="onFollow"
      :loading="isFollowLoading"
      >已关注</van-button
    >
  </div>
</template>

<script>
import { addFollowAPI, deleteFollowAPI } from '@/api'
export default {
  name: 'FollowBtn',
  components: {

  },
  // 通过v-model传数据过来 默认是props 里面 的value 接收数据 @input 接收事件
  // 通过model 修改默认规则
  model: {
    prop: 'article'
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      isFollowLoading: false // 关注 取消关注 加载中的状态
    }
  },
  methods: {
    // 关注 或 取消关注
    onFollow () {
      this.isFollowLoading = true
      if (this.article.is_followed) {
        // 取消关注
        deleteFollowAPI(this.article.aut_id)
      } else {
        // 关注
        addFollowAPI(this.article.aut_id)
      }
      this.article.is_followed = !this.article.is_followed
      this.isFollowLoading = false
      this.$toast.success('操作成功')
    }
  },
  computed: {},
  watch: {},

  created () {

  },

  mounted () {

  },

  beforeDestroy () {

  }
}
</script>

<style lang="less" scoped>
</style>
