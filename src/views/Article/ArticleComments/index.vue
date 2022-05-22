<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    :immediate-check="false"
  >
    <CommentItem
      @changeLikeState="handleChangeLikeState"
      v-for="(item, index) in type === 'a' ? list : commentList"
      :key="index"
      :comment="item"
      :index="index"
      @replyClick="$emit('replyClick', $event)"
    />
  </van-list>
</template>

<script>
import { getArticleCommentAPI } from '@/api'
import CommentItem from '@/components/CommentItem'
export default {
  name: 'ArticleComments',
  components: {
    CommentItem
  },
  props: {
    article: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: 'a',
      validator (val) {
        return ['a', 'c'].includes(val)
      }
    }
  },

  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      offset: null,
      totalCommens: 0,
      commentList: []
    }
  },
  methods: {
    async onLoad () {
      const { data: { data: { last_id: offset, results, total_count: totalCommens } } } = await getArticleCommentAPI({
        type: this.type,
        source: this.type === 'a' ? this.article.art_id : this.article.com_id,
        offset: this.offset,
        limit: 20
      })
      this.offset = offset
      if (this.type !== 'a') {
        this.commentList.push(...results)
      } else {
        this.list.push(...results)
      }
      this.loading = false
      if (results.length === 0) {
        this.finished = true
      }

      // 把评论总数传递给父组件
      this.totalCommens = totalCommens
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
    // isHasComId 是传过来的评论id 如有评论id 就表示 给评论更新一条数据 没有就表示给文章更新一条数据
    this.$bus.$on('updateCommentList', (newComment, isHasComId) => {
      if (isHasComId) {
        this.commentList.unshift(newComment)
        // 通知祖组件 回复+1
        this.$bus.$emit('addCommentNum', this.commentList.length)
      } else {
        this.list.unshift(newComment)
        // 再通知父组件的评论总数加1
        this.totalCommens++
        this.$emit('addTotalComment', this.totalCommens)
      }
    })
  },

  mounted () {

  },

  beforeDestroy () {

  }
}
</script>

<style lang="less" scoped>
</style>
