import moment from 'moment'

moment.locale('zh-CN')

const timeago = (n) => {
  return moment(n).fromNow()
}

module.exports = {timeago}
