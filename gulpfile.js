var gulp = require("gulp"),
	concat = require("gulp-concat"),
	uglify = require('gulp-uglify'),
    cssmin= require("gulp-cssmin");






	gulp.task('concat', function(){
		gulp.src([
			"node_modules/bootstrap/dist/js/bootstrap.min.js"
			])
		
		.pipe(concat("bundle.js"))
		.pipe(gulp.dest("weather-dashboard/js"));



	});

	gulp.task("less", function(){
		gulp.src("node_modules/bootstrap/less/bootstrap.less")
		.pipe(less())
		.pipe(concat("bundle.css"))
		.pipe(gulp.dest("assests/css"));	

	});

	

	gulp.task("cssmin", function(){
		gulp.src("css/weather.css")
		.pipe(cssmin())
		.pipe(concat("weather.min.css"))
		.pipe(gulp.dest("D:/ISS/Scratch/weather-dashboard/css"));
	});

		gulp.task("cssmin1", function(){
		gulp.src("css/weather-icons.css")
		.pipe(cssmin())
		.pipe(concat("weather-icons.min.css"))
		.pipe(gulp.dest("D:/ISS/Scratch/weather-dashboard/css"));
	});


		 gulp.task("cssmin2", function(){
		 gulp.src("css/bootstrap.css")
		.pipe(cssmin())
		.pipe(concat("Bootstrap.min.css"))
		.pipe(gulp.dest("D:/ISS/Scratch/weather-dashboard/css"));
	});