<template>
  <div class="comment-reply">
    <!-- 导航栏 -->
    <van-nav-bar
      :title="
        comment.reply_count > 0 ? `${comment.reply_count}条回复` : '暂无回复'
      "
    >
      <van-icon slot="left" name="cross" @click="onClick" />
    </van-nav-bar>
    <!-- /导航栏 -->

    <div class="scroll-wrap">
      <!-- 当前评论项 -->
      <CommentItem :comment="comment" />
      <!-- /当前评论项 -->

      <van-cell title="所有回复" />
      <!-- 评论的回复列表 -->
      <ArticleComments :article="comment" :type="'c'" />
      <!-- /评论的回复列表 -->
    </div>
    <!-- 底部 -->
    <div class="reply-bottom">
      <van-button
        class="write-btn"
        round
        size="small"
        @click="isReplyPostShow = true"
        >回复
      </van-button>
    </div>
    <!-- /底部 -->

    <!-- 回复评论里面的的 回复的弹层 -->
    <van-popup v-model="isReplyPostShow" position="bottom">
      <CommentPost
        v-if="isReplyPostShow"
        :articleId="articleId"
        :commentId="comment.com_id"
        @closePost="isReplyPostShow = false"
      />
    </van-popup>
  </div>
</template>

<script>
import CommentItem from '@/components/CommentItem'
import ArticleComments from '../../ArticleComments'
import CommentPost from '../CommentPost'
export default {
  name: 'CommentReply',
  components: {
    CommentItem,
    ArticleComments,
    CommentPost
  },
  inject: ['articleId'],
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isReplyPostShow: false
    }
  },
  computed: {},
  watch: {},
  created () {

  },
  mounted () {},
  methods: {
    onClick () {
      this.$emit('ClickClose')
      this.$destroy()
    }
  }
}
</script>

<style lang="less" scoped>
.scroll-wrap {
  position: fixed;
  top: 92px;
  left: 0;
  right: 0;
  bottom: 88px;
  overflow-y: auto;
}

.reply-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-top: 1px solid #d8d8d8;
  .write-btn {
    width: 60%;
  }
}
</style>
