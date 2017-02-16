import moment from '../packages/moment/moment'

module.exports = (n) => {
  return moment(n).fromNow()
}
