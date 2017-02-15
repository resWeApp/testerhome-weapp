import i18n from '../../../utils/i18n'

module.exports = Page({
  data: {
  },
  onReady() {
    wx.setNavigationBarTitle({
      title: i18n.zh_CN.explore
    })
  },
  onLoad() {
  }
})
