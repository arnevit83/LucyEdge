const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');

const outputFolder = "./src/assets/images/";

imagemin(['./src/assets/uncompressed images/*.{jpg,png}'], outputFolder, {
    use: [
        imageminWebp({quality: 50})
    ]
}).then(() => {
    console.log('WEBP Images created');
});



imagemin(['./src/assets/uncompressed images/*.png'], outputFolder, {
  use: [
    imageminPngquant({quality: 1,speed: 1,strip: true})
  ]
}).then(() => {
    console.log('PNG Images optimized');
});



imagemin(['./src/assets/uncompressed images/*.jpg'], outputFolder, {
  use: [
    imageminJpegtran({progressive: true})
  ]
}).then(() => {
    console.log('JPG Images optimized');
});
