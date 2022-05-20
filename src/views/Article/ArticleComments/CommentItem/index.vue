<template>
  <van-cell class="comment-item">
    <van-image
      slot="icon"
      class="avatar"
      round
      fit="cover"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <div slot="title" class="title-wrap">
      <div class="user-name">{{ comment.aut_name }}</div>
      <van-button
        @click="handleClick"
        class="like-btn"
        :class="{ active: comment.is_liking }"
        icon="good-job-o"
        >{{ comment.like_count > 0 ? comment.like_count : "赞" }}</van-button
      >
    </div>

    <div slot="label">
      <p class="comment-content">{{ comment.content }}</p>
      <div class="bottom-info">
        <span class="comment-pubdate">{{
          comment.pubdate | relativeTime
        }}</span>
        <van-button class="reply-btn" round
          >回复 {{ comment.reply_count }}</van-button
        >
      </div>
    </div>
  </van-cell>
</template>

<script>
import { addCommentLikeAPI, deleteCommentLikeAPI } from '@/api'
export default {
  name: 'CommentItem',
  components: {},
  props: {
    comment: {
      type: Object,
      required: true
    },
    index: [String, Number]
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    handleClick () {
      if (this.comment.is_liking) {
        // 取消
        deleteCommentLikeAPI(this.comment.com_id)
      } else {
        // 点赞
        addCommentLikeAPI({
          target: this.comment.com_id
        })
      }
      // 通知父组件 修改状态
      this.$emit('changeLikeState', !this.comment.is_liking, this.index)
    }
  }
}
</script>

<style scoped lang="less">
.comment-item {
  .avatar {
    width: 72px;
    height: 72px;
    margin-right: 25px;
  }
  .title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-name {
      color: #406599;
      font-size: 26px;
    }
  }
  .comment-content {
    font-size: 32px;
    color: #222222;
    word-break: break-all;
    text-align: justify;
  }
  .comment-pubdate {
    font-size: 19px;
    color: #222;
    margin-right: 25px;
  }
  .bottom-info {
    display: flex;
    align-items: center;
  }
  .reply-btn {
    width: 135px;
    height: 48px;
    line-height: 48px;
    font-size: 21px;
    color: #222;
  }
  .like-btn {
    height: 30px;
    padding: 0;
    border: none;
    font-size: 19px;
    line-height: 30px;
    margin-right: 7px;
    .van-icon {
      font-size: 30px;
    }
    &.active {
      color: red;
    }
  }
}
</style>
