<template>
  <div class="login_container">
    <van-nav-bar title="登录" class="page_nav_bar"
      ><van-icon
        name="arrow-left"
        slot="left"
        size="20"
        @click="$router.back()"
    /></van-nav-bar>
    <van-form @submit="onSubmit" ref="loginForm">
      <van-field
        ref="loginForm"
        v-model="mobile"
        name="mobile"
        placeholder="请填写手机号"
        :rules="[
          { required: true, message: '手机号必填' },
          { pattern: /^1[3|5|7|8]\d{9}$/, message: '请填写正确的手机号' },
        ]"
      >
        <template #left-icon>
          <i class="toutiao toutiao-shouji"> </i>
        </template>
      </van-field>
      <van-field
        v-model="code"
        type="text"
        name="code"
        placeholder="请填写验证码"
        :rules="[
          { required: true, message: '验证码必填' },
          { pattern: /^\d{6}$/, message: '请填写正确的验证码' },
        ]"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <van-count-down
          v-if="isShowDown"
          slot="right-icon"
          millisecond
          :time="1000 * 60"
          format="SS s"
          @finish="isShowDown = false"
        />
        <van-button
          v-else
          native-type="button"
          class="send_sms_btn"
          round
          slot="right-icon"
          size="small"
          type="default"
          @click="onSendSms"
          >发送验证码</van-button
        >
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginAPI, sendSmsAPI } from '@/api/index'
export default {
  name: 'LoginPage',
  data () {
    return {
      mobile: '15182991528',
      code: '246810',
      isShowDown: false
    }
  },
  methods: {
    async onSendSms () {
      try {
        await this.$refs.loginForm.validate('mobile')
        // 2. 验证通过，显示倒计时
        this.isShowDown = true
        // 3. 请求发送验证码
        await sendSmsAPI(this.mobile)
      } catch (err) {
        if (err.response && err.response.status === 429) {
          this.$toast.fail(err.response.data.message)
        } else {
          this.$toast.fail('手机号验证失败')
        }
      }
    },

    async onSubmit (values) {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        // 获取数据
        const { data: { data } } = await loginAPI(values)
        this.$store.commit('userInfo/setUser', data)
        this.$toast.success('登录成功')
        this.$router.back()
      } catch (error) {
        console.log(error)
        if (error.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        } else {
          this.$toast.fail('登录失败,请稍后重试!!')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  .toutiao {
    font-size: 37px;
  }

  .send_sms_btn {
    width: 156px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;

    .van-button__text {
      font-size: 22px;
      color: #666;
    }
  }
}
</style>
