<template>
  <div class="">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
      />
    </van-list>
  </div>
</template>

<script>
import { getSearchResultAPI } from '@/api'
export default {
  name: 'SearchResult',
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  components: {

  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      perPage: 20
    }
  },
  methods: {
    async onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      const { data: { data: { results } } } = await getSearchResultAPI(this.searchText)
      this.list.push(...results)
      this.loading = false
      if (!results) {
        this.finished = true
      }

      // 数据全部加载完成
      if (this.list.length >= 40) {
        this.finished = true
      }
    }
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
