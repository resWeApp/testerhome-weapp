const linkTo = (path) => {
  return `/pages/${path}/index`
}

const resolveUserAvatarUrl = (path) => {
  const ROOT_URL = 'https://testerhome.com'

  return ROOT_URL + path.replace(ROOT_URL, '').replace(/\!.+$/g, '!md')
}

module.exports = {
  linkTo,
  resolveUserAvatarUrl
}
