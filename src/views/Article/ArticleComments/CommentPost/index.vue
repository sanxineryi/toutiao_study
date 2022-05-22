<template>
  <div class="post-comment">
    <van-field
      class="post-field"
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      maxlength="50"
      placeholder="优质评论将会被优先展示"
      show-word-limit
    />
    <van-button type="primary" size="small" @click="onReleaseComment"
      >发布</van-button
    >
  </div>
</template>

<script>
import { releaseCommentAPI } from '@/api'
export default {
  name: 'PostComment',
  components: {},
  props: {
    articleId: [String, Number],
    commentId: {
      type: [String, Number],
      default: null
    }
  },
  data () {
    return {
      message: ''
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onReleaseComment () {
      // 评论的目标id（评论文章即为文章id，对评论进行回复则为评论id）
      const { data: { data: { new_obj: newComment } } } = await releaseCommentAPI({
        target: this.commentId ? this.commentId : this.articleId,
        content: this.message,
        art_id: this.commentId ? this.articleId : null
      })
      // 清空输入框
      this.message = ''
      // 关闭弹层
      this.$emit('closePost')
      // 通知兄弟组件 新增一条评论
      // 判断是新增文章评论 还是评论的评论
      this.$bus.$emit('updateCommentList', newComment, this.commentId)
    }
  }
}
</script>

<style scoped lang="less">
.post-comment {
  display: flex;
  padding: 15px;
  align-items: flex-end;
  .post-field {
    background: #f5f7f9;
    margin-right: 15px;
  }
}
</style>
