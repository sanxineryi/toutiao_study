<template>
  <div class="">
    <van-nav-bar
      title="昵称"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="textarea">
      <van-field
        v-model="localName"
        rows="2"
        autosize
        type="textarea"
        maxlength="10"
        placeholder="请输入昵称"
        show-word-limit
      />
    </div>
  </div>
</template>

<script>
import { updateUserNameAPI } from '@/api'
export default {
  name: 'UpdateNikeName',
  components: {

  },
  props: {
    value: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      localName: this.value
    }
  },
  methods: {
    onClickLeft () {
      this.$emit('close')
    },
    onClickRight () {
      try {
        updateUserNameAPI({ name: this.localName })
        // 提示信息
        this.$toast.success('操作成功')
        this.$emit('input', this.localName)
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
.textarea {
  padding: 20px;
}
</style>
