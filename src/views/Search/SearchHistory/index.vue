<template>
  <div class="">
    <van-cell title="搜索历史">
      <van-icon name="delete-o" v-if="!isEdit" @click="isEdit = true" />
      <template v-else>
        <span @click="$emit('clearAllHistory')">全部删除</span>
        <span style="margin-left: 15px" @click="isEdit = false">完成</span>
      </template>
    </van-cell>

    <van-cell v-for="(item, index) in searchHistory" :key="index" :title="item"
      ><van-icon
        v-show="isEdit"
        name="close"
        @click="$emit('delHistory', index)"
    /></van-cell>
  </div>
</template>

<script>
export default {
  name: 'SearchHistory',
  components: {

  },
  props: {
    searchHistory: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      isEdit: false // 是否处于编辑状态
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
</style>
