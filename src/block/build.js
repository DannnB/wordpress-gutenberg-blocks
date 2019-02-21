// ideas
https://codepen.io/bssjackson/pen/OXXwWq
https://codepen.io/ig_design/pen/omQXoQ
https://codepen.io/craftjd/pen/QYBKPp
https://codepen.io/FilipVitas/pen/NoOmrE
https://codepen.io/tiffachoo/pen/JyWmbR
https://codepen.io/KamilDyrek/pen/rPKOaV
https://codepen.io/joshuaward/pen/XOZVNO
https://codepen.io/AMack17/pen/vbdzRy
https://codepen.io/simoberny/pen/bzLRYe
https://codepen.io/lucagez/pen/BMmKeK - lazy loading 
https://codepen.io/letsbleachthis/pen/zewKYE - scroller site
https://codepen.io/creativeocean/pen/QZBoMB - image zoom
https://codepen.io/feather/pen/xMxGpR - a11y and UX
https://codepen.io/littlesnippets/pen/vKpvGP - blog/event post hover


https://codepen.io/joshuajcollinsworth/pen/MLjVrQ - vue example
https://codepen.io/ig_design/


//
// Expanding grid on click
//
// $(".desktop-wrapper .option").click(function(){
//    $(".option").removeClass("active");
//    $(this).addClass("active");
// });wddddtdf
console.clear();

(function () {
  const options = document.getElementsByClassName('option');

  console.log(options);

  let toggleOption = (e) => {
    console.log('Toggling option...');
    console.log(e)
    // element.ClassList.toggle('active');
  }

  Array.from(options).forEach(element => {
    // console.log(element)
    element.addEventListener('click', (e) => {
      if (element.classList.contains('active')) {
        console.log('already active');
        return;
      } else {
        Array.from(options).forEach(ele => {
          ele.classList.remove('active');
        })
        element.classList.toggle("active");
      }
    });
  })
}())


https://deliciousbrains.com/custom-gutenberg-block/



//build
https://deliciousbrains.com/npm-build-script/

{
  "author": "",                               "author": ""
    "description": "",                          "description": "",
      "main": "index.js",
        "name": "npm-test",
          "private": true,
            "version": "1.0.0",
              "dependencies": { },
  "devDependencies": {
    "@babel/cli": "^7.2.3",
      "@babel/core": "^7.2.2",
        "@babel/preset-env": "^7.3.1",
          "clean-css-cli": "^4.2.1",
            "node-sass": "^4.11.0",
              "npm-run-all": "^4.1.5",
                "onchange": "^5.2.0",
                  "uglify-js": "^3.4.9"
  },
  "scripts": {
    "babel": "babel --presets '@babel/env' assets/src/js/script.js -o assets/src/build/scripts.js",
      "cssmin": "cleancss -o assets/css/styles.min.css assets/src/build/styles.css",
        "scss": "node-sass --omit-source-map-url -o assets/src/build assets/src/scss/styles.scss",
          "uglify": "uglifyjs -o assets/js/scripts.min.js assets/src/build/scripts.js",

            "build:css": "npm run scss && npm run cssmin",
              "build:js": "npm run babel && npm run uglify",
                "build": "npm run build:css && npm run build:js",

                  "watch:css": "onchange assets/src/**/*.scss -- npm run build:css",
                    "watch:js": "onchange assets/src/**/*.js -- npm run build:js",
                      "watch": "npm-run-all --parallel watch:*"
  }
}