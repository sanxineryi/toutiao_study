<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <CommentItem
      @changeLikeState="handleChangeLikeState"
      v-for="(item, index) in list"
      :key="index"
      :comment="item"
      :index="index"
    />
  </van-list>
</template>

<script>
import { getArticleCommentAPI } from '@/api'
import CommentItem from './CommentItem'
export default {
  name: 'ArticleComments',
  components: {
    CommentItem
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      offset: null
    }
  },
  methods: {
    async onLoad () {
      const { data: { data: { last_id: offset, results, total_count: totalCommens } } } = await getArticleCommentAPI({
        type: 'a',
        source: this.article.art_id,
        offset: this.offset,
        limit: 20
      })
      this.offset = offset
      this.list.push(...results)
      this.loading = false
      if (results.length === 0) {
        this.finished = true
      }

      // 把评论总数传递给父组件
      this.$emit('getTotalComments', totalCommens)
    },

    // 处理 点赞状态
    handleChangeLikeState (val, index) {
      const temp = this.list[index]
      temp.is_liking = val
      // 那边为真 表示已经点过赞了 把值取反传过来 就为false了 ,这边再取反 表示要执行取消点赞 所以if里面减减
      if (!val) {
        temp.like_count--
      } else {
        temp.like_count++
      }
    }
  },
  computed: {},
  watch: {},

  created () {
    this.onLoad()
  },

  mounted () {

  },

  beforeDestroy () {

  }
}
</script>

<style lang="less" scoped>
</style>
