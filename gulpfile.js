//Install Gulp verisons lower than 4.0 both locally and globally
//current veriosn 3.9.1

//ERROR FIX
//https://stackoverflow.com/questions/33716647/gulp-not-creating-any-files

let gulp = require("gulp");
let babel = require("gulp-babel");

gulp.task("dataHandle", function() {
  return gulp
    .src("./public/javascripts/*.js")
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(gulp.dest("./public/build"));
});

gulp.task("homePageHandle", function() {
  return gulp
    .src("public/javascripts/homePageHandle.js")
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(gulp.dest("./public/build"));
});
