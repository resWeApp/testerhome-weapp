import {linkTo} from './utils/links'

module.exports = App({
  onLaunch() {
    wx.switchTab({
      url: linkTo('layouts/Topic')
    })
  },
  globalData: {
    currentUser: {}
  }
})
