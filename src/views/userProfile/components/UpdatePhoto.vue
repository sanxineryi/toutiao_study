<template>
  <div class="update-photo">
    <img :src="img" class="img" ref="imgRef" />
    <div class="toolbar">
      <div @click="$emit('close')">取消</div>
      <div @click="onConfirm">完成</div>
    </div>
  </div>
</template>

<script>
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
import { updateUserAvatarAPI } from '@/api'
export default {
  name: '',
  components: {

  },
  props: {
    img: {
      type: [String, Object],
      required: true
    }
  },

  data () {
    return {

    }
  },
  methods: {
    onConfirm () {
      this.cropper.getCroppedCanvas().toBlob(async blob => {
        console.log(blob)
        const formData = new FormData()
        formData.append('photo', blob)
        const { data: { data } } = await updateUserAvatarAPI(formData)
        // 提示用户
        this.$toast.success('更新成功')
        // 通知父组件更新数据
        this.$emit('updatePhoto', data.photo)
        // 关闭弹层
        this.$emit('close')
      })
    }
  },
  computed: {},
  watch: {},

  created () {

  },

  mounted () {
    const image = this.$refs.imgRef
    // eslint-disable-next-line no-unused-vars
    this.cropper = new Cropper(image, {
      viewMode: 1, // 只能在裁剪的图片范围内移动
      dragMode: 'move', // 画布和图片都可以移动
      aspectRatio: 1, // 裁剪区默认正方形
      autoCropArea: 1, // 自动调整裁剪图片
      cropBoxMovable: false, // 禁止裁剪区移动
      cropBoxResizable: false, // 禁止裁剪区缩放
      background: false // 关闭默认背景
    })
  },

  beforeDestroy () {

  }
}
</script>

<style lang="less" scoped>
.update-photo {
  background: #000;
  height: 100%;
}
.toolbar {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  color: #fff;
  justify-content: space-between;
  padding: 0 15px 15px 15px;
  box-sizing: border-box;
  font-size: 28px;
}
.img {
  display: block;
  max-width: 100%;
}
</style>
