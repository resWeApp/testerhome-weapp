import i18n from '../../../utils/i18n'
import {API_URL} from '../../../utils/urls'
import timeago from '../../../utils/timeago'
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

    wx.showNavigationBarLoading()
    wx.request({
      url: `${API_URL}/topics.json`,
      success(response) {
        onRequestSuccess(response)
        wx.hideNavigationBarLoading()
      }
    })
  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },
  onRequestSuccess(response) {
    this.setData({
      topics: response.data.topics.map((item) => {
        return Object.assign(item, {
          user: Object.assign(item.user, {
            avatar_url: resolveUserAvatarUrl(item.user.avatar_url)
          }),
          created_at: timeago(item.created_at)
        })
      })
    })
  }
})
