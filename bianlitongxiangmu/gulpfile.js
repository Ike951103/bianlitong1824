//导入
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
//任务
gulp.task('sass',()=>{
	gulp.src('src/sass/*.scss')
	.pipe(sass())
	.pipe(cssmin())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('dest/css'));
})

gulp.task('js',function(){
	gulp.src('src/js/*.js')
	//.pipe(concat())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(uglify())
	.pipe(gulp.dest('dest/js'));
})

gulp.task('image',function(){
	gulp.src('src/image/*')
	.pipe(rename({"suffix" : ".min"}))
	.pipe(imagemin())
	.pipe(gulp.dest('dest/image'));
})

gulp.task('default',function(){
	gulp.watch('src/sass/*.scss',['sass']);
	gulp.watch('src/js/*.js',['js']);
	gulp.watch('src/image/*',["image"]);
	
})