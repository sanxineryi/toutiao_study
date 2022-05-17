<template>
  <div class="articleList-container">
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      success-text="刷新成功"
      success-duration="1000"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
      >
        <ArticleItem v-for="(item, index) in list" :key="index" :article="item">
        </ArticleItem>
        <!-- <van-cell
          v-for="(item, index) in list"
          :key="index"
          :title="item.title"
        /> -->
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api'
import ArticleItem from '@/components/ArticleItem'
export default {
  name: 'ArticleList',
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  components: {
    ArticleItem
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      timestamp: Date.now(),
      error: false,
      refreshing: false
    }
  },
  methods: {
    async onLoad () {
      try {
        const { data: { data: { results, pre_timestamp: timestamp } } } = await getArticleListAPI({
          channel_id: this.channel.id, // 频道 id
          timestamp: this.timestamp // 时间戳，请求新的推荐数据传当前的时间戳，请求历史推荐传指定的时间戳
        })
        this.list.push(...results)
        this.loading = false
        if (!timestamp) {
          this.finished = true
        }
        this.timestamp = timestamp
      } catch (error) {
        this.loading = false
        this.error = true
      }
    },
    async onRefresh () {
      const { data: { data: { results } } } = await getArticleListAPI({
        channel_id: this.channel.id, // 频道 id
        timestamp: Date.now()
      })
      this.list.unshift(...results)
      this.refreshing = false
    }
  },
  computed: {},
  created () {

  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
.articleList-container {
  height: 79vh;
  overflow-y: auto;
}
</style>
