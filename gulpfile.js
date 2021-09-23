// imports always go at the top
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
//import sass from 'gulp-sass'; TODO - configure this plugin

function compileSass(done) {
    return gulp.src('./sass/**/*.scss') //grab everything in the sass folder
    .pipe(sass().on('error', sass.logError)) //rin all our sass files thru 
    .pipe(gulp.dest('./css')); //save the complied CSS file in its directory
    done();
}

function squashImages(done) {
    gulp.src('images/*') //grab images
		.pipe(imagemin()) //process
		.pipe(gulp.dest('images/dist')) //destination

    done();
}
function sayHi(done) {
    console.log('hello from Gulp! Easy Peasy!');

    //you can do all kinds of fun stuff here

    done();
}

export {
    sayHi as hello, 
    squashImages as resize, 
    compileSass as compile}