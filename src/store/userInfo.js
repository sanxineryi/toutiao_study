import { TOKEN_KEY } from '@/const'
import { getItem, setItem } from '@/utils/storage'

const userInfo = {
  namespaced: true,
  state: {
    user: getItem(TOKEN_KEY)
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 存到本地存储
      setItem(TOKEN_KEY, data)
    }
  },
  actions: {
  },
  getters: {}
}

export default userInfo
