<template>
  <div class="article-container markdown-body">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar page_nav_bar" title="头条">
      <van-icon name="revoke" slot="left" size="25" @click="$router.back()" />
    </van-nav-bar>
    <!-- /导航栏 -->

    <div class="main-wrap">
      <!-- 加载中 -->
      <div class="loading-wrap" v-if="loading">
        <van-loading color="#3296fa" vertical>加载中</van-loading>
      </div>
      <!-- /加载中 -->
      <template v-else>
        <!-- 加载完成-文章详情 -->
        <div class="article-detail" v-if="article.title">
          <!-- 文章标题 -->
          <h1 class="article-title">{{ article.title }}</h1>
          <!-- /文章标题 -->

          <!-- 用户信息 -->
          <van-cell class="user-info" center :border="false">
            <van-image
              class="avatar"
              slot="icon"
              round
              fit="cover"
              :src="article.aut_photo"
            />
            <div slot="title" class="user-name">{{ article.aut_name }}</div>
            <div slot="label" class="publish-date">{{ article.pubdate }}</div>
            <!-- 关注按钮 -->
            <!-- <FollowBtn :article="article" /> -->
            <!-- v-model -->
            <FollowBtn v-model="article" />
          </van-cell>
          <!-- /用户信息 -->

          <!-- 文章内容 -->
          <div
            class="article-content"
            v-html="article.content"
            ref="articleRef"
          ></div>
          <van-divider>正文结束</van-divider>

          <!-- 评论组件 -->
          <ArticleComments
            :article="article"
            @getTotalComments="totalComments = $event"
            @addTotalComment="onAddTotalComment"
            @replyClick="handleReplyClick"
          />
          <!-- /评论组件 -->
        </div>
        <!-- /加载完成-文章详情 -->
        <template v-else>
          <!-- 加载失败：404 -->
          <div class="error-wrap" v-if="errStatus">
            <van-icon name="failure" />
            <p class="text">该资源不存在或已删除！</p>
          </div>
          <!-- /加载失败：404 -->

          <!-- 加载失败：其它未知错误（例如网络原因或服务端异常） -->
          <div class="error-wrap" v-else>
            <van-icon name="failure" />
            <p class="text">内容加载失败！</p>
            <van-button class="retry-btn">点击重试</van-button>
          </div>
          <!-- /加载失败：其它未知错误（例如网络原因或服务端异常） -->
        </template>
      </template>
    </div>

    <!-- 底部区域 -->
    <div class="article-bottom">
      <van-button
        class="comment-btn"
        type="default"
        round
        size="small"
        @click="isPostShow = true"
        >写评论</van-button
      >
      <van-icon name="comment-o" :info="totalComments" color="#777" />

      <!-- 收藏按钮 -->
      <CollectIcon
        v-model="article.is_collected"
        :article="article"
      ></CollectIcon>
      <!-- /收藏按钮 -->

      <!-- 点赞按钮 -->
      <LikeIcon v-model="article.like_count" :article="article" />
      <!-- /点赞按钮 -->

      <van-icon name="share" color="#777777"></van-icon>
    </div>
    <!-- /底部区域 -->

    <!-- 写评论的弹出层 -->
    <van-popup v-model="isPostShow" position="bottom">
      <CommentPost
        v-if="isPostShow"
        :articleId="articleId"
        @closePost="isPostShow = false"
      />
    </van-popup>

    <!-- 回复评论弹层 -->
    <van-popup
      position="bottom"
      v-model="isReplyShow"
      :style="{ height: '100%' }"
    >
      <!-- 可以用v-if 销毁组件 -->
      <CommentReply
        v-if="isReplyShow"
        :comment="currentComment"
        @ClickClose="isReplyShow = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'
import { getArticleByIdAPI } from '@/api'
import FollowBtn from '@/components/FollowBtn'
import CollectIcon from '@/components/CollectIcon'
import LikeIcon from '@/components/LikeIcon'
import ArticleComments from './ArticleComments'
import CommentReply from './ArticleComments/CommentReply'
import CommentPost from './ArticleComments/CommentPost'
import '@/../node_modules/github-markdown-css/github-markdown.css'
import '@/../node_modules/github-markdown-css/github-markdown-light.css'
export default {
  name: 'ArticleIndex',
  components: {
    FollowBtn,
    CollectIcon,
    LikeIcon,
    ArticleComments,
    CommentPost,
    CommentReply
  },
  props: {
    articleId: {
      type: [Number, String, Object],
      required: true
    }
  },
  provide: function () {
    return {
      articleId: this.articleId
    }
  },
  data () {
    return {
      article: {},
      loading: true,
      errStatus: false,
      totalComments: 0, // 评论总数
      isPostShow: false,
      isReplyShow: false, // 回复评论弹层
      currentComment: {}
    }
  },
  computed: {

  },
  watch: {},
  async created () {
    try {
      const { data: { data } } = await getArticleByIdAPI(this.articleId)
      this.article = data
    } catch (error) {
      if (error.response && error.response.status === 404) {
        this.errStatus = true
      } else {
        this.errStatus = false
      }
    }
    this.loading = false

    // 拿到所有图片信息 登录dom更新完之后再执行获取真是dom的操作
    this.$nextTick(() => {
      this.previeImg()
    })
  },
  mounted () {
    // 回复数量+1
    this.$bus.$on('addCommentNum', (val) => {
      this.currentComment.reply_count = val
    })
  },
  methods: {
    // 完成图片放大预览
    previeImg () {
      const images = []
      this.$refs.articleRef.querySelectorAll('img').forEach((item, index) => {
        images.push(item.src)
        item.onclick = () => {
          console.log(images)
          ImagePreview({
            images,
            startPosition: index
          })
        }
      })
    },
    onAddTotalComment (total) {
      this.totalComments = total
    },
    handleReplyClick (comment) {
      console.log(comment)
      this.isReplyShow = true
      this.currentComment = comment
    }
  }
}
</script>

<style scoped lang="less">
.article-container {
  .main-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 92px;
    bottom: 88px;
    overflow-y: scroll;
    background-color: #fff;
  }
  .article-detail {
    .article-title {
      font-size: 40px;
      padding: 50px 32px;
      margin: 0;
      color: #3a3a3a;
    }

    .user-info {
      padding: 0 32px;
      .avatar {
        width: 70px;
        height: 70px;
        margin-right: 17px;
      }
      .van-cell__label {
        margin-top: 0;
      }
      .user-name {
        font-size: 24px;
        color: #3a3a3a;
      }
      .publish-date {
        font-size: 23px;
        color: #b7b7b7;
      }
      .follow-btn {
        width: 100%;
        height: 100%;
      }
    }

    .article-content {
      padding: 55px 32px;
      /deep/ p {
        text-align: justify;
      }
    }
  }

  .loading-wrap {
    padding: 200px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }

  .error-wrap {
    padding: 200px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    .van-icon {
      font-size: 122px;
      color: #b4b4b4;
    }
    .text {
      font-size: 30px;
      color: #666666;
      margin: 33px 0 46px;
    }
    .retry-btn {
      width: 280px;
      height: 70px;
      line-height: 70px;
      border: 1px solid #c3c3c3;
      font-size: 30px;
      color: #666666;
    }
  }

  .article-bottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    height: 88px;
    border-top: 1px solid #d8d8d8;
    background-color: #fff;
    .comment-btn {
      width: 282px;
      height: 46px;
      border: 2px solid #eeeeee;
      font-size: 30px;
      line-height: 46px;
      color: #a7a7a7;
    }
    .van-icon {
      font-size: 40px;
      .van-info {
        font-size: 16px;
        background-color: #e22829;
      }
    }
  }
}
</style>
