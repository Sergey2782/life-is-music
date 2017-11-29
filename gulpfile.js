 var gulp = require('gulp'),
	    sass = require('gulp-sass'),           
 browserSync = require('browser-sync'),
	  concat = require('gulp-concat'),
	  uglify = require('gulp-uglify'),
     cssnano = require('gulp-cssnano'),
      rename = require('gulp-rename'),
	     del = require('del'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
    gifsicle = require('imagemin-gifsicle'),
	   cache = require('gulp-cache'),
autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function(){ 
	return gulp.src('app/sass/main.scss') 
		.pipe(sass()) 
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('app/css')) 
		.pipe(browserSync.reload({stream: true})) 
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: './' 
		},
		notify: false
	});
});

gulp.task('scripts', function(){
	return gulp.src([
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
	 ])
     .pipe(concat('libs.min.js'))
     .pipe(uglify())
     .pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['sass'], function(){
	return gulp.src('app/css/main.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('watch',['browser-sync', 'css-libs','scripts'], function(){  //в кв скобках выполнится до watch
	gulp.watch('app/sass/**/*.scss', ['sass']);// усли изменения в sass то таск [sass]
	gulp.watch('./*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            une: [pngquant()]
        })))
	.pipe(gulp.dest('dist/img'));
})

gulp.task('gif', function(){
	return gulp.src('app/img/**/*.gif')
	  .pipe(cache(gifsicle()))
	  .pipe(gulp.dest('dist/img'));
})
    
gulp.task('build', ['clean', 'img','gif', 'sass', 'scripts'], function(){
	var buildCss = gulp.src([
       'app/css/main.css',
       'app/css/main.min.css',
	])
	.pipe(gulp.dest('dist/css'));

 	var buildFonts = gulp.src('app/fonts/**/*')
 	    .pipe(gulp.dest('dist/fonts'));
    
    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js'));
})

gulp.task('clear', function (callback) {
	return cache.clearAll();
})

gulp.task('default', ['watch']);