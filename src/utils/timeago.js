import moment from '../packages/moment/moment'

moment.locale('zh-CN')

module.exports = (n) => {
  return moment(n).fromNow()
}
