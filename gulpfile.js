var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
gulp.task('html', function() {
    gulp.src('*.*')
        .pipe(browserSync.stream());
});
gulp.task('serve', function() {
    browserSync.init({
        port: 2016,
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./assets/js/*.js', ['html']);         //监控文件变化，自动更新
    gulp.watch('./assets/css/*.css', ['html']);
    gulp.watch('./assets/images/*.*', ['html']);
    gulp.watch('./*.html', ['html']);
});