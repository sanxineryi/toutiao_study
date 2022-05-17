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
    <SearchHistory v-else />
  </div>
</template>

<script>
import SearchHistory from './SearchHistory'
import SearchSuggestion from './SearchSuggestion'
import SearchResult from './SearchResult'
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
      isResultShow: false // 是否显示搜索结果
    }
  },
  methods: {
    onSearch (val) {
      this.isResultShow = true
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
