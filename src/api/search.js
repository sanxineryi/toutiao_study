import request from '@/utils/request'

// 获取搜索联想建议
export const getSearchSuggestion = q => {
  return request({
    method: 'GET',
    url: '/v1_0/suggestion',
    params: {
      q
    }
  })
}

// 获取搜索结果
export const getSearchResult = q => {
  return request({
    method: 'GET',
    url: '/v1_0/search',
    params: {
      page: 1,
      per_page: 20,
      q
    }
  })
}
