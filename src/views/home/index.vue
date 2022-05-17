<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page_nav_bar" fixed>
      <van-button
        class="search-btn"
        slot="title"
        type="info"
        size="small"
        round
        icon="search"
        to="/search"
        >搜索</van-button
      >
    </van-nav-bar>
    <!-- /导航栏 -->
    <van-tabs
      class="channel-tabs van-tabs__wrap--scrollable"
      v-model="active"
      animated
      swipeable
    >
      <van-tab
        :title="item.name"
        v-for="(item, index) in channels"
        :key="index"
      >
        <ArticleList :channel="item" />
      </van-tab>
      <div class="placeholder" slot="nav-right"></div>
      <div
        class="hamburger-btn"
        slot="nav-right"
        @click="isChannelEditShow = true"
      >
        <i class="toutiao toutiao-gengduo"></i>
      </div>
    </van-tabs>

    <!-- 控制频道编辑的 弹出层 -->
    <van-popup
      v-model="isChannelEditShow"
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '100%' }"
    >
      <ChannelEdit :my-channels="channels" :active="active" />
    </van-popup>
  </div>
</template>

<script>
import { addUserChannelAPI, getUserChannelsAPI } from '@/api'
import ArticleList from './ArticleList'
import ChannelEdit from './ChannelEdit'
import { mapState } from 'vuex'
import { getItem, setItem } from '@/utils/storage'
export default {
  name: 'HomePage',
  components: {
    ArticleList,
    ChannelEdit
  },

  data () {
    return {
      active: 0,
      channels: [],
      isChannelEditShow: false // 控制弹出层显示隐藏
    }
  },

  methods: {

  },

  computed: {
    ...mapState('userInfo', ['user'])
  },

  async created () {
    const { data: { data: { channels } } } = await getUserChannelsAPI()
    if (this.user) {
      this.channels = channels
    } else {
      this.channels = getItem('TOUTIAO_CHANNEL') ? getItem('TOUTIAO_CHANNEL') : channels
    }
  },

  mounted () {
    // 添加频道
    this.$bus.$on('addChannel', (item) => {
      if (this.user) {
        console.log(111)
        // 登录
        this.channels.push(item)
        addUserChannelAPI(this.channels)
      } else {
        // 未登录 点击了添加 存到localstorage
        this.channels.push(item)
        setItem('TOUTIAO_CHANNEL', this.channels)
      }
    })
    // 切换频道
    this.$bus.$on('updateActive', (index) => {
      this.active = index
      this.isChannelEditShow = false
    })
    // 删除频道
    this.$bus.$on('delChannel', (index) => {
      console.log(this.active, index) // 10 9
      if (this.active >= index) {
        this.active = this.active - 1
      }
      this.channels.splice(index, 1)
    })
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding-top: 190px;
  padding-bottom: 100px;
  // 样式穿透
  /deep/.van-nav-bar__title {
    max-width: unset;
  }
  .search-btn {
    width: 555px;
    height: 64px;
    background-color: #5babfb;
    border: none;
    font-size: 28px;
    .van-icon {
      font-size: 32px;
    }
  }

  // 频道列表
  /deep/ .channel-tabs {
    .van-tab {
      border-right: 1px solid #edeff3;
      min-width: 200px;
      height: 80px;
      .van-tab__text {
        font-size: 27px;
        color: #777777;
      }
    }
    .van-tab--active .van-tab__text {
      color: #333 !important;
    }

    .van-tabs__wrap {
      position: fixed;
      z-index: 1;
      top: 92px;
      left: 0;
      right: 0; // width: 100%; 都行
    }

    .van-tabs__line {
      width: 31px !important;
      height: 6px;
      background: rgba(50, 150, 250, 1);
      border-radius: 3px;
      bottom: 8px;
    }
    .van-tabs__nav {
      padding: 0;
    }
  }

  // 汉堡按钮
  .hamburger-btn {
    position: fixed;
    right: 0;
    width: 66px;
    height: 82px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    opacity: 0.902;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      width: 2px;
      height: 100%;
      background-image: url(~@/assets/gradient-gray-line.png);
      background-size: contain;
    }
  }
  // 搜索
  .placeholder {
    flex-shrink: 0;
    width: 66px;
    height: 82px;
  }
}
</style>
