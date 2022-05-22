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
    <van-cell title="头像" is-link>
      <van-image class="avatar" fit="cover" round :src="userData.photo" />
    </van-cell>
    <van-cell title="昵称" :value="userData.name" is-link />
    <van-cell
      title="性别"
      :value="userData.gender == 0 ? '女' : '男'"
      is-link
    />
    <van-cell title="生日" :value="userData.birthday" is-link />
  </div>
</template>

<script>
import { getUserProfileAPI } from '@/api'
export default {
  name: 'UserProfile',
  components: {

  },
  props: {},

  data () {
    return {
      userData: []
    }
  },
  methods: {

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
</style>
