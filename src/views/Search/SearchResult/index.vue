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
      // 发请求 拿数据
      const { data: { data: { results } } } = await getSearchResultAPI({
        page: this.page,
        per_page: this.perPage,
        q: this.searchText
      })
      // // 添加数据到数组
      // this.list.push(...results)
      // // 关闭加载
      // this.loading = false
      // // 判断 如果没有数据了 就设置加载完成
      // if (!results.length) {
      //   this.finished = true
      // } else {
      //   // 页码++
      //   this.page++
      // }

      // 简化写法
      Object.assign(this, {
        list: [...this.list, ...results],
        loading: false,
        finished: results.length === 0,
        page: this.page++
      })
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
