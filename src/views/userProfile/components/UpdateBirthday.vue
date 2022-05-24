<template>
  <div class="">
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
      @cancel="$emit('close')"
      @confirm="onConfirm"
    />
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { updateUserNameAPI } from '@/api'
export default {
  name: 'UpdateBirthday',
  components: {

  },
  props: {
    value: [String]
  },

  data () {
    return {
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(this.vue)
    }
  },
  methods: {
    onConfirm (val) {
      try {
        const birthday = dayjs(val).format('YYYY-MM-DD')
        updateUserNameAPI({ birthday })
        // 提示信息
        this.$toast.success('操作成功')
        this.$emit('input', birthday)
        this.$emit('close')
      } catch (error) {
        console.log(error)
        this.$toast.fail(error.message)
      }
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
