<template>
  <div class="search-container">
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        background="#3296fa"
        @search="onSearch"
        @cancel="onCancel"
        @focus="isResultShow = false"
      />
    </form>

    <!-- 搜索结果 -->
    <SearchResult v-if="isResultShow" :searchText="searchText" />
    <!-- 搜索建议 -->
    <SearchSuggestion
      v-else-if="searchText"
      :searchText="searchText"
      @search="onSearch"
    />
    <!-- 搜索历史 -->
    <SearchHistory
      v-else
      :searchHistory="searchHistory"
      @delHistory="searchHistory.splice($event, 1)"
      @clearAllHistory="searchHistory.splice(0)"
    />
  </div>
</template>

<script>
import SearchHistory from './SearchHistory'
import SearchSuggestion from './SearchSuggestion'
import SearchResult from './SearchResult'
import { getItem, setItem } from '@/utils/storage'
export default {
  name: 'SearchPage',
  components: {
    SearchHistory,
    SearchSuggestion,
    SearchResult
  },
  data () {
    return {
      searchText: '',
      isResultShow: false, // 是否显示搜索结果
      // 使用逻辑中断 比三元 更简单 前面为真 就用前面的  为假就用后面的
      searchHistory: getItem('TOUTIAO-HISTORY') || [] // 存储搜索历史数据

    }
  },
  watch: {
    searchHistory () {
      setItem('TOUTIAO-HISTORY', this.searchHistory)
    }
  },
  methods: {
    onSearch (val) {
      // 显示搜索结果
      this.isResultShow = true

      // 存历史数据
      // const index = this.searchHistory.indexOf(val)
      const index = this.searchHistory.findIndex(item => item === val)
      if (index !== -1) this.searchHistory.splice(index, 1)
      this.searchHistory.unshift(val)
      this.searchText = val // 把这个数据传递给result组件 做为请求的参数
    },
    onCancel () {
      // 点击取消 返回上一级路由
      this.$router.back()
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
.van-search__action {
  color: #fff;
}
</style>
