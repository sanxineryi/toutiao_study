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
