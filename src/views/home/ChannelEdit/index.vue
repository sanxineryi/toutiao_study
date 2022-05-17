<template>
  <div class="channel-edit">
    <van-cell>
      <div slot="title" class="title-text my-grid">我的频道</div>
      <van-button
        type="danger"
        :border="false"
        round
        plain
        size="mini"
        class="edit-btn"
        @click="isEdit = !isEdit"
        >{{ isEdit ? "完成" : "编辑" }}</van-button
      >
    </van-cell>

    <van-grid :gutter="10" class="channel-item my-grid">
      <van-grid-item
        class="grid-item"
        v-for="(channel, index) in myChannels"
        :key="index"
        :icon="isEdit ? 'clear' : ''"
        @click="onChannelClick(index)"
      >
        <span class="text" slot="text" :class="{ active: index === active }">{{
          channel.name
        }}</span>
      </van-grid-item>
    </van-grid>

    <!-- 推荐频道 -->
    <van-cell>
      <div slot="title" class="title-text">推荐频道</div>
    </van-cell>
    <van-grid :gutter="10" class="recommend-grid">
      <van-grid-item
        class="grid-item"
        v-for="(item, index) in channels"
        :key="index"
        :text="item.name"
        icon="plus"
        @click="onAddChannel(item)"
      />
    </van-grid>
  </div>
</template>

<script>
import { getAllChannelsAPI } from '@/api'
export default {
  name: 'ChannelEdit',
  props: {
    myChannels: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      required: true
    }
  },
  components: {

  },
  data () {
    return {
      allChannels: [],
      isEdit: false
    }
  },
  methods: {
    onAddChannel (item) {
      // 非常规写法
    //   this.$parent.$parent.channels.push(item)
    // 事件总线写法
      this.$bus.$emit('addChannel', item)
    },
    onChannelClick (index) {
      if (this.isEdit) {
        // 删除操作
        this.$bus.$emit('delChannel', index)
      } else {
        // 切换操作
        this.$bus.$emit('updateActive', index)
      }
    }
  },
  computed: {
    channels () {
      return this.allChannels.filter(item => !this.myChannels.find(t => t.id === item.id))
    }
  },
  async created () {
    const { data: { data: { channels } } } = await getAllChannelsAPI()
    this.allChannels = channels
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
.channel-edit {
  padding-top: 100px;
}

.title-text {
  font-size: 32px;
  color: #333333;
}

.edit-btn {
  width: 104px;
  height: 48px;
  font-size: 26px;
  color: #f85959;
  border: 1px solid #f85959;
}

/deep/ .grid-item {
  width: 160px;
  height: 86px;
  .van-grid-item__content {
    white-space: nowrap;
    background-color: #f4f5f6;
    .van-grid-item__text,
    .text {
      font-size: 28px;
      color: #222;
      margin-top: 0;
    }
    .active {
      color: red;
    }
    .van-grid-item__icon-wrapper {
      position: unset;
    }
  }
}

/deep/ .my-grid {
  .grid-item {
    .van-icon-clear {
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 30px;
      color: #cacaca;
      z-index: 2;
    }
  }
}
/deep/ .recommend-grid {
  .grid-item {
    .van-grid-item__content {
      flex-direction: row;
      .van-icon-plus {
        top: -3px;
        font-size: 28px;
        margin-right: 6px;
      }
    }
  }
}
</style>
