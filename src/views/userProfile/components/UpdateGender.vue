<template>
  <div class="">
    <van-picker
      title="性别"
      show-toolbar
      :columns="columns"
      @confirm="onConfirm"
      @cancel="onCancel"
      @change="onChange"
      :default-index="this.localGender"
    />
  </div>
</template>

<script>
import { updateUserNameAPI } from '@/api'
export default {
  name: 'UpdateGender',
  components: {

  },
  props: {
    value: [String, Number]
  },

  data () {
    return {
      localGender: this.value,
      columns: ['男', '女']
    }
  },
  methods: {
    onConfirm (value, index) {
      try {
        updateUserNameAPI({ gender: index })
        // 提示信息
        this.$toast.success('操作成功')
        this.$emit('input', index)
        this.$emit('close')
      } catch (error) {
        console.log(error)
        this.$toast.fail(error.message)
      }
    },
    onChange (picker, value, index) {
    },
    onCancel () {
      this.$emit('close')
    }
  },
  computed: {},
  watch: {},

  created () {

  },

  mounted () {

  },

  beforeDestroy () {

  }
}
</script>

<style lang="less" scoped>
</style>
