import i18n from '../../../utils/i18n'
import pages from '../../../utils/pages'

module.exports = Page({
  data: {
  },
  onReady() {
    wx.setNavigationBarTitle({
      title: i18n.zh_CN.explore
    })
  },
  onLoad() {
    wx.switchTab({
      url: pages('layouts/CurrentUser')
    })
  }
})
