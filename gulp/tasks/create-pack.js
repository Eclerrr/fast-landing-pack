const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const tasks = require('../tasks-init.js');


// Создает мобильную версию проекта

// params       - объект с параметрами
// params.type	- тип сборки ('mobile','desktop','resp')


// Эта функция оставит указанные коментрии при удалении
function cssCommentNoDel (str){
  return {
    preserve: function(comment){
        if((comment.indexOf(str) + 1)){
          return true;
        }
    }
  }
}


module.exports = function (params){

  // - true - Удалять код под флагом
  // - false - Не удалять код под флагом


  let defaultParams =  {
      mobileFlags: {
        mobile: true,
        desktop: false,
        resp: false,
        noMobile: false,
        noDesktop: true,
        noResp: true,
        all:true
      },
      desktopFlags: {
        mobile: false,
        desktop: true,
        resp: false,
        noMobile: true,
        noDesktop: false,
        noResp: true,
        all:true
      },
      respFlags: {
        mobile: false,
        desktop: false,
        resp: true,
        noMobile: true,
        noDesktop: true,
        noResp: false,
        all:true
      }
    };


    let packDir;
    let removeValue;

    switch (params.type) {
      case 'mobile':
        packDir = 'asia/mobile';
        removeValue = defaultParams.mobileFlags;
        break;
      case 'desktop':
        packDir = 'asia/desktop';
        removeValue = defaultParams.desktopFlags;
      case 'resp':
        packDir = 'responsive';
        removeValue = defaultParams.respFlags;
      default:
        break;
    }


  // Удаляет код в комментариях HTML
  gulp.task( 'remove-code-HTML', tasks['remove-code']({
    files: './build/index.html',
    opt: removeValue,
    dest: `./dist/${packDir}`,
  }))

  // Удаляет код в комментариях JS
  gulp.task( 'remove-code-JS', tasks['remove-code']({
    files: './build/js/main.js',
    opt: removeValue,
    dest: `./dist/${packDir}/js`,
  }))

  // Удаляет код в комментариях CSS
  gulp.task( 'remove-code-CSS', tasks['remove-code']({
    files: './build/css/**/*',
    opt: removeValue,
    dest: `./dist/${packDir}/css`,
  }))

  // Копируем изображения
  gulp.task( 'copy-img', tasks['copy']({
    files: [
        './build/img/**/*',
        //'!./build/img/mobile',
        //'!./build/img/mobile/**',
        //'!./build/img/mobile/**/*'
      ],
    dest: `./dist/${packDir}/img`,
  }))


  // Удаялем комментарии из HTML
  gulp.task( 'del-comment-HTML', tasks['del-comment']({
    files: `./dist/${packDir}/index.html`,
    opt: {
      safe:true
    },
    dest: `./dist/${packDir}/`,
  }))

  // Удаялем комментарии из JS

  gulp.task( 'del-comment-JS', tasks['del-comment']({
    files: `./dist/${packDir}/js/**/*.js`,
    opt: {
      safe:true
    },
    dest: `./dist/${packDir}/js`,
  }))


  // Удаялем комментарии из CSS


  gulp.task( 'del-comment-CSS', tasks['del-comment']({
    css: true,
    files: `./dist/${packDir}/css/**/*.css`,
    opt: cssCommentNoDel('==='),
    dest: `./dist/${packDir}/css`,
  }))

	return gulp.series([
    'remove-code-HTML',
    'remove-code-JS',
    'remove-code-CSS',
    'copy-img',
    'del-comment-HTML',
    'del-comment-JS',
    'del-comment-CSS'
  ])
};