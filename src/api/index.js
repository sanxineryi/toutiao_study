import { login, sendSms, getUserInfo, getUserChannels } from './user'
import { getArticleList, getAllChannels, addUserChannel } from './article'
import { getSearchSuggestion, getSearchResult } from './search'

// 用户相关api
export const loginAPI = login
export const sendSmsAPI = sendSms
export const getUserInfoAPI = getUserInfo
export const getUserChannelsAPI = getUserChannels

// 文章相关api
export const getArticleListAPI = getArticleList
export const getAllChannelsAPI = getAllChannels
export const addUserChannelAPI = addUserChannel

// 搜索相关api

export const getSearchSuggestionAPI = getSearchSuggestion
export const getSearchResultAPI = getSearchResult
