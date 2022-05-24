import request from '@/utils/request'

export const login = data => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}

export const sendSms = mobile => {
  return request({
    method: 'get',
    url: '/v1_0/sms/codes/' + mobile
  })
}

export const getUserInfo = () => {
  console.log(1)
  return request({
    method: 'get',
    url: '/v1_0/user'
  })
}

export const getUserChannels = () => {
  return request({
    method: 'get',
    url: '/v1_0/user/channels'
  })
}

// 关注
export const addFollow = userId => {
  return request({
    method: 'POST',
    url: '/v1_0/user/followings',
    data: {
      target: userId
    }
  })
}

// 取消关注
export const deleteFollow = userId => {
  return request({
    method: 'DELETE',
    url: `/v1_0/user/followings/${userId}`
  })
}

// 获取指定用户信息
export const getUserProfile = () => {
  return request({
    method: 'GET',
    url: '/v1_0/user/profile'
  })
}

// 更新昵称
export const updateUserName = data => {
  return request({
    method: 'PATCH',
    url: '/v1_0/user/profile',
    data
  })
}

// 更新头像
export const updateUserAvatar = data => {
  return request({
    method: 'PATCH',
    url: 'v1_0/user/photo',
    data
  })
}
