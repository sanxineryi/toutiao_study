// 获取本地存储的方法
export const getItem = key => {
  try {
    const val = window.localStorage.getItem(key) ? window.localStorage.getItem(key) : null
    return JSON.parse(val)
  } catch (error) {
    return null
  }
}

// 存储本地的方法
export const setItem = (key, val) => {
  if (typeof val !== 'string') {
    val = JSON.stringify(val)
  }
  window.localStorage.setItem(key, val)
}
