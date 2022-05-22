// 用户相关
import {
  login,
  sendSms,
  getUserInfo,
  getUserChannels,
  addFollow,
  deleteFollow,
  getUserProfile
} from './user'

// 文章相关
import {
  getArticleList,
  getAllChannels,
  addUserChannel,
  getArticleById,
  collectArticle,
  cancelCollectArticle,
  likeArticle,
  UnlikeArticle,
  getArticleComment,
  addCommentLike,
  deleteCommentLike,
  releaseComment
} from './article'

// 搜索相关
import {
  getSearchSuggestion,
  getSearchResult
} from './search'

// 用户相关api
export const loginAPI = login
export const sendSmsAPI = sendSms
export const getUserInfoAPI = getUserInfo
export const getUserChannelsAPI = getUserChannels
export const addFollowAPI = addFollow
export const deleteFollowAPI = deleteFollow
export const getUserProfileAPI = getUserProfile

// 文章相关api
export const getArticleListAPI = getArticleList
export const getAllChannelsAPI = getAllChannels
export const addUserChannelAPI = addUserChannel
export const getArticleByIdAPI = getArticleById
export const collectArticleAPI = collectArticle
export const cancelCollectArticleAPI = cancelCollectArticle
export const likeArticleAPI = likeArticle
export const UnlikeArticleAPI = UnlikeArticle
export const getArticleCommentAPI = getArticleComment
export const addCommentLikeAPI = addCommentLike
export const deleteCommentLikeAPI = deleteCommentLike
export const releaseCommentAPI = releaseComment

// 搜索相关api

export const getSearchSuggestionAPI = getSearchSuggestion
export const getSearchResultAPI = getSearchResult
