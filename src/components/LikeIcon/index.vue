<template>
  <div class="">
    <van-icon
      :color="value === 1 ? 'red' : '#777'"
      :name="value === 1 ? 'good-job' : 'good-job-o'"
      size="23"
      @click="hanLikeArticle"
    />
  </div>
</template>

<script>
import { likeArticleAPI, UnlikeArticleAPI } from '@/api'
export default {
  name: 'LikeIcon',
  components: {

  },
  props: {
    value: [Number, String],
    article: {
      type: Object,
      required: true
    }
  },

  data () {
    return {

    }
  },
  methods: {
    hanLikeArticle () {
      if (this.value < 1) {
        // 没有点赞
        likeArticleAPI({ target: this.article.art_id })
        this.$emit('input', 1)
      } else {
        // 已经点赞
        console.log(this.article.art_id)
        UnlikeArticleAPI(this.article.art_id)
        this.$emit('input', 0)
      }
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
