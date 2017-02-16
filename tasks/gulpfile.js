import path from 'path'
import glob from 'glob'
import gulp from 'gulp'
import toml from 'gulp-toml'
import gutil from 'gulp-util'
import babel from 'gulp-babel'
import stylus from 'gulp-stylus'
import change from 'gulp-change'
import rename from 'gulp-rename'

const DIST_EXTENSIONS = ['.wxss', '.wxml']
const DESTINATION_DIR = path.normalize('dist')
const SOURCES_PATTERN = path.normalize('src/**/*')

gulp.task('babel', () => {
  return gulp.src(`${SOURCES_PATTERN}.js`).pipe(babel({
    presets: ['latest']
  })).on('error', (error) => {
    gutil.log(gutil.colors.red(error.message))
  }).pipe(gulp.dest(DESTINATION_DIR))
})

gulp.task('stylus', () => {
  return gulp.src(`${SOURCES_PATTERN}.styl`).pipe(stylus({
  })).pipe(rename({
    extname: DIST_EXTENSIONS[0]
  })).pipe(gulp.dest(DESTINATION_DIR))
})

gulp.task('vue', () => {
  return gulp.src(`${SOURCES_PATTERN}.vue`).pipe(rename({
    extname: DIST_EXTENSIONS[1]
  })).pipe(gulp.dest(DESTINATION_DIR))
})

gulp.task('toml', () => {
  return gulp.src(`${SOURCES_PATTERN}.toml`).pipe(toml({
  })).pipe(gulp.dest(DESTINATION_DIR))
})

gulp.task('json', () => {
  return gulp.src(`${SOURCES_PATTERN}.json`).pipe(change((content, next) => {
    const contentJS = JSON.parse(content)
    const {tabBar} = contentJS

    contentJS.pages = glob.sync(`${SOURCES_PATTERN}.js`).filter((path) => {
      return path.match(/\/[A-Z](\w+)?\//g)
    }).map((n) => {
      return n.replace(/^src\//g, '').replace(/\.js$/g, '')
    })

    contentJS.tabBar.list = tabBar.list.map((item) => {
      return Object.assign(item, {
        pagePath: `${item.pagePath.replace(/\/index$/g, '')}/index`
      })
    })

    next(null, JSON.stringify(contentJS, null, 2))
  })).pipe(gulp.dest(DESTINATION_DIR))
})

gulp.task('images', () => {
  return gulp.src(`${SOURCES_PATTERN}.png`).pipe(gulp.dest(DESTINATION_DIR))
})

gulp.task('packages', () => {
  return gulp.src(['moment'].map((n) => {
    return `node_modules/*${n}/**/*`
  })).pipe(gulp.dest(`${DESTINATION_DIR}/packages`))
})

gulp.task('build', gulp.series('json', 'toml', gulp.parallel('vue', 'babel', 'images', 'stylus', 'packages')))

gulp.task('watch', () => {
  gulp.watch(`${SOURCES_PATTERN}.vue`, gulp.series('vue'))
  gulp.watch(`${SOURCES_PATTERN}.json`, gulp.series('json'))
  gulp.watch(`${SOURCES_PATTERN}.toml`, gulp.series('toml'))
  gulp.watch(`${SOURCES_PATTERN}.png`, gulp.series('images'))
  gulp.watch(`${SOURCES_PATTERN}.styl`, gulp.series('stylus'))
  gulp.watch(`${SOURCES_PATTERN}.js`, gulp.series('babel', 'json'))
})

gulp.task('default', gulp.series('build', 'watch'))
