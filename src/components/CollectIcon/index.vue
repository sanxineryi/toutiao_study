<template>
  <div class="">
    <van-icon
      size="23"
      :color="value ? '#ffa500' : '#777'"
      :name="value ? 'star' : 'star-o'"
      @click="handleCollentArticle"
    />
  </div>
</template>

<script>
import { cancelCollectArticleAPI, collectArticleAPI } from '@/api'
export default {
  name: 'CollectIcon',
  components: {

  },
  props: {
    value: Boolean,
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
    handleCollentArticle () {
      if (this.value) {
        // true 表示已经收藏 (点击取消收藏)
        cancelCollectArticleAPI(this.article.art_id)
      } else {
        // false 表示未收藏 (点击收藏文章)
        collectArticleAPI({ target: this.article.art_id })
      }
      this.$emit('input', !this.value)
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
