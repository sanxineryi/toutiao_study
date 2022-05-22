<template>
  <div>
    <!-- 未登录 -->
    <div class="header not-login" v-if="!user">
      <div class="login-btn" @click="$router.push('/login')">
        <img src="~@/assets/mobile.png" alt="" />
        <span>登录 / 注册</span>
      </div>
    </div>

    <!-- 已登录 -->
    <div class="header user-info" v-else>
      <div class="base-info">
        <div class="left">
          <van-image
            class="avatar"
            round
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            fit="cover"
          />
          <span class="name">程序员</span>
        </div>
        <div class="right">
          <van-button round size="mini" type="default" to="/user/profile"
            >编辑资料</van-button
          >
        </div>
      </div>

      <!-- 导航 -->
      <div class="data-stats">
        <div class="data-item">
          <span class="count">{{ userinfo.art_count }}</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userinfo.follow_count }}</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userinfo.fans_count }}</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userinfo.like_count }}</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>
    <!-- 宫格 -->
    <van-grid :column-num="2" class="grid-nav">
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-shoucang"></i>
        <span class="text" slot="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-lishi"></i>
        <span class="text" slot="text">历史</span>
      </van-grid-item>
    </van-grid>

    <van-cell title="消息通知" is-link />
    <van-cell title="小智同学" is-link class="mb-9" />
    <van-cell
      title="退出登录"
      class="logout-cell"
      v-if="user"
      @click="onLogout"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfoAPI } from '@/api'
export default {
  name: 'MyPage',
  data () {
    return {
      userinfo: []
    }
  },
  computed: {
    ...mapState('userInfo', ['user'])
  },
  methods: {
    onLogout () {
      this.$dialog.confirm({
        title: '确认退出吗'
      })
        .then(() => {
          // on confirm
          this.$store.commit('userInfo/setUser', null)
        })
        .catch(() => {
          // on cancel
        })
    }
  },
  async created () {
    if (this.$store.state.userInfo.user && this.$store.state.userInfo.user.token) {
      // console.log(getUserInfoAPI)
      const { data: { data } } = await getUserInfoAPI()
      this.userinfo = data
    }
  }

}
</script>

<style lang="less" scoped>
.header {
  height: 361px;
  background: url("~@/assets/banner.png");
  background-size: cover;
}
.not-login {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 132px;
    height: 132px;
    margin-bottom: 15px;
  }
  span {
    font-size: 28px;
    color: #fff;
  }
}
.user-info {
  .base-info {
    height: 231px;
    padding: 76px 32px 23px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .avatar {
        width: 132px;
        height: 132px;
        border: 4px solid #fff;
        margin-right: 23px;
      }
      .name {
        font-size: 30px;
        color: #fff;
      }
    }
  }
}
.data-stats {
  display: flex;
  .data-item {
    height: 130px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    .count {
      font-size: 36px;
    }
    .text {
      font-size: 23px;
    }
  }
}

.grid-nav {
  .grid-item {
    height: 141px;
    i.toutiao {
      font-size: 45px;
    }
    .toutiao-shoucang {
      color: #eb5253;
    }
    .toutiao-lishi {
      color: #ff9d1d;
    }
    span.text {
      font-size: 28px;
    }
  }
}

.logout-cell {
  text-align: center;
  color: #d86262;
}

.mb-9 {
  margin-bottom: 9px;
}
</style>
