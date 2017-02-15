import i18n from '../../../utils/i18n'
import {linkTo} from '../../../utils/links'

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
      url: linkTo('layouts/Topic')
    })
  }
})
