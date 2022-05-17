<template>
  <van-cell class="article_item">
    <!-- 标题 -->
    <div class="title" slot="title">{{ article.title }}</div>
    <!-- 右侧图片 1张 -->
    <div class="right-cover" slot="default" v-if="article.cover.type === 1">
      <van-image width="100" height="100" :src="article.cover.images[0]" />
    </div>
    <!-- label插槽 自定义标题下方的内容 -->
    <div class="" slot="label">
      <!-- 中间 3张图片 -->
      <div v-if="article.cover.type === 3" class="cover-wrap">
        <div
          class="cover-item"
          v-for="(img, index) in article.cover.images"
          :key="index"
        >
          <van-image fit="cover" :src="img" class="cover-item-img" />
        </div>
      </div>
      <!-- 底部作者 -->
      <div class="label-info-wrap">
        <span>{{ article.aut_name }}</span>
        <span>{{ article.comm_count }} 评论</span>
        <span>{{ article.pubdate | relativeTime }}</span>
      </div>
    </div>
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {

  },
  props: {
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

  },
  computed: {},
  created () {

  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
.article_item {
  .title {
    font-size: 32px;
    color: #3a3a3a;
  }

  .van-cell__value {
    flex: unset;
    width: 232px;
    height: 146px;
    padding-left: 25px;
  }

  .right-cover {
    width: 232px;
    height: 146px;
  }

  .label-info-wrap span {
    font-size: 22px;
    color: #b4b4b4;
    margin-right: 25px;
  }

  .cover-wrap {
    display: flex;
    padding: 30px 0;
    .cover-item {
      flex: 1;
      height: 146px;
      &:not(:last-child) {
        padding-right: 4px;
      }
      .cover-item-img {
        width: 100%;
        height: 146px;
      }
    }
  }
}
</style>
