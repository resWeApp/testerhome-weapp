import i18n from '../../../utils/i18n'
import {API_URL} from '../../../utils/url'

module.exports = Page({
  data: {
  },
  onReady() {
    wx.setNavigationBarTitle({
      title: i18n.zh_CN.topics
    })
  },
  onLoad() {
    wx.request({
      url: `${API_URL}/topics.json`,
      success(response) {
        console.log(response)
      }
    })
  },
  onRequestSuccess(response) {
    console.log('onRequestSuccess')
    // this.setData({})
  }
})
