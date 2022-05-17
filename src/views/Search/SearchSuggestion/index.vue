<template>
  <div class="">
    <van-cell title="搜索建议" />
    <van-cell
      icon="search"
      v-for="(item, index) in list"
      :key="index"
      @click="$emit('search', item)"
    >
      <!-- 把当前项的值传递给父组件的 显示在输入框中 -->
      <div slot="title" v-html="highlight(item)"></div>
    </van-cell>
  </div>
</template>

<script>
import { getSearchSuggestionAPI } from '@/api'
import { debounce } from 'lodash'
// function debounce (fn, num) {
//   let timer = null
//   // 高阶函数(接受函数作为参数/返回函数)
//   return function (val) {
//     // console.log(this)//this执行组件
//     // 闭包,延长变量的使用范围
//     if (timer) clearTimeout(timer)
//     timer = setTimeout(() => {
//       // 改变this执行,用call/apply/bind
//       // 箭头函数里面this是上一级的的this
//       fn.call(this, val)
//     }, num)
//   }
// }

export default {
  name: 'SearchSuggestion',
  props: {
    searchText: {
      type: String,
      require: true
    }
  },
  components: {

  },
  watch: {
    searchText: {
    //   handler (val) {
    //     clearTimeout(this.timer)
    //     this.timer = setTimeout(async () => {
    //       const { data: { data: { options } } } = await getSearchSuggestionAPI(val)
    //       this.list = options
    //     }, 1000)
    //   },
    // 做防抖
      handler: debounce(async function (val) {
        const { data: { data: { options } } } = await getSearchSuggestionAPI(val)
        if (!options[0]) {
          this.list = []
        } else {
          this.list = options
        }
      }, 1000),
      immediate: true
    }

  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    highlight (item) {
      return item.replaceAll(`${this.searchText}`, `<span style="color:red">${this.searchText}</span>`)
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
