import i18n from '../../../utils/i18n'
import {API_URL} from '../../../utils/urls'
import {resolveUserAvatarUrl} from '../../../utils/links'

module.exports = Page({
  data: {
    topics: []
  },
  onReady() {
    wx.setNavigationBarTitle({
      title: i18n.zh_CN.topics
    })
  },
  onLoad() {
    const {onRequestSuccess} = this

    wx.request({
      url: `${API_URL}/topics.json`,
      success(response) {
        onRequestSuccess(response)
      }
    })
  },
  onRequestSuccess(response) {
    this.setData({
      topics: response.data.topics.map((item) => {
        return Object.assign(item, {
          user: Object.assign(item.user, {
            avatar_url: resolveUserAvatarUrl(item.user.avatar_url)
          })
        })
      })
    })
  }
})
