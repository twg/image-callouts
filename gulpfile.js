// Configuration
var cirlceColor = '#00000080'; //rrggbbaa where aa is % transparency
var radius      = 10;
var numberColor = 'white';
var numberSize  = 20;
var labelSize   = 20;

// Sources
markdown_matcher        = "./*.md"
source_image_folder     = "./source_img/"
source_image_type       = "*.png"
desination_image_folder = "./img/"

// Comment Matching Regex
var comments  = /\[\/\/\]: # \((.*)\)/g;
var open_tag  = /\[\/\/\]: # \(/;
var close_tag = /\)/;

// Vars
var gulp        = require('gulp');
var gutil       = require('gulp-util');
var gm          = require('gm');
var async       = require('async');
var runSequence = require('run-sequence');


// Sub-Tasks
gulp.task('copyImages', function() {
  return gulp.src(source_image_folder + source_image_type)
    .pipe(gulp.dest(desination_image_folder))
})

gulp.task('processImages', function() {
  return gulp.src(markdown_matcher)
    .pipe(gutil.buffer(function(err, files){
      var workers = [];
      var image = null;

      async.series([function(callback){
        files.forEach(function(file){
          var tags = file.contents.toString('utf8').match(comments);

          if (tags) {
            tags.forEach(function(tag){
              tag = JSON.parse(tag.replace(open_tag, '').replace(close_tag, ''));

              if (isNaN(tag.text)) {
                addText(workers, tag, callback);
              }
              else {
                tag.x = parseInt(tag.x);
                tag.y = parseInt(tag.y);
                addNumber(workers, tag, callback);
              }
            })
          }
        });
        callback(null);
      },
      function(callback){
        async.series(workers);
        callback(null);
      }])
  }));
})

// Helpers
var addNumber = function(workers, tag, callback){
  workers.push(function(callback){
    gm(desination_image_folder + tag.file)
      .fill(cirlceColor)
      .drawCircle(tag.x, tag.y, tag.x + radius, tag.y + radius)
      .fill(numberColor)
      .fontSize(numberSize)
      .drawText(tag.x - numberSize / 4, tag.y + numberSize / 4, tag.text)
      .write(desination_image_folder + tag.file, function(err) {
        if (err)
          console.log(err);
        else
          callback(null);
      });
  })
}

var addText = function(workers, tag, callback){
  workers.push(function(callback){
    gm(desination_image_folder + tag.file)
      .gravity("South")
      .fill("black")
      .fontSize(labelSize)
      .drawText(0, labelSize / 2, tag.text)
      .write(desination_image_folder + tag.file, function(err) {
        if (err)
          console.log(err);
        else
          callback(null);
      });
  })
}

// TASKS //////////////////////////////////////////////////////////////////////

gulp.task('watch', function() {
  gulp.watch(markdown_matcher, function() {
    runSequence('copyImages', 'processImages')
  });
});

gulp.task('default', function() {
  runSequence('copyImages', 'processImages')
});
