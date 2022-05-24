<template>
  <div class="user-profile">
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- /导航栏 -->

    <input type="file" hidden ref="fileRef" @change="onFileChange" />
    <van-cell title="头像" is-link @click="$refs.fileRef.click()">
      <van-image class="avatar" fit="cover" round :src="userData.photo" />
    </van-cell>
    <van-cell
      title="昵称"
      :value="userData.name"
      is-link
      @click="isUpdatenicknameSshow = true"
    />
    <van-cell
      title="性别"
      :value="userData.gender == 1 ? '女' : '男'"
      is-link
      @click="isUpdateGenderShow = true"
    />
    <van-cell
      title="生日"
      :value="userData.birthday"
      is-link
      @click="isUpdateBirthdayShow = true"
    />

    <!-- 修改昵称 的弹出层-->
    <van-popup
      v-model="isUpdatenicknameSshow"
      position="bottom"
      :style="{ height: '100%' }"
    >
      <UpdateNikeName
        v-model="userData.name"
        @close="isUpdatenicknameSshow = false"
        v-if="isUpdatenicknameSshow"
      />
    </van-popup>

    <!-- 修改性别的弹层 -->
    <van-popup
      v-model="isUpdateGenderShow"
      position="bottom"
      :style="{ height: '50%' }"
    >
      <UpdateGender
        v-model="userData.gender"
        @close="isUpdateGenderShow = false"
        v-if="isUpdateGenderShow"
      />
    </van-popup>

    <!-- 修改生日日期的弹层 -->
    <van-popup
      v-model="isUpdateBirthdayShow"
      position="bottom"
      :style="{ height: '50%' }"
    >
      <UpdateBirthday
        v-model="userData.birthday"
        @close="isUpdateBirthdayShow = false"
        v-if="isUpdateBirthdayShow"
      />
    </van-popup>

    <!-- 修改头像的弹层 -->
    <van-popup
      v-model="isUpdatePhotoShow"
      position="bottom"
      :style="{ height: '100%' }"
    >
      <UpdatePhoto
        @close="isUpdatePhotoShow = false"
        v-if="isUpdatePhotoShow"
        :img="imgUrl"
        @updatePhoto="userData.photo = $event"
      />
    </van-popup>
  </div>
</template>

<script>
import { getUserProfileAPI } from '@/api'
import UpdateNikeName from './components/UpdateNikeName.vue'
import UpdateGender from './components/UpdateGender.vue'
import UpdateBirthday from './components/UpdateBirthday.vue'
import UpdatePhoto from './components/UpdatePhoto.vue'
export default {
  name: 'UserProfile',
  components: {
    UpdateNikeName,
    UpdateGender,
    UpdateBirthday,
    UpdatePhoto
  },
  props: {},

  data () {
    return {
      userData: {},
      isUpdatenicknameSshow: false,
      isUpdateGenderShow: false,
      isUpdateBirthdayShow: false,
      isUpdatePhotoShow: false,
      imgUrl: ''
    }
  },
  methods: {
    onFileChange (event) {
      const res = URL.createObjectURL(event.target.files[0])
      this.imgUrl = res
      event.target.value = null
      this.isUpdatePhotoShow = true
    }
  },
  computed: {},
  watch: {},

  async created () {
    const { data: { data } } = await getUserProfileAPI()
    this.userData = data
  },

  mounted () {

  },

  beforeDestroy () {

  }
}
</script>

<style scoped lang='less'>
.user-profile {
  .avatar {
    width: 60px;
    height: 60px;
  }
}
.van-popup {
  background-color: #efefef;
}
</style>
