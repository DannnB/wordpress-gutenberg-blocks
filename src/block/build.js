// ideas
https://codepen.io/bssjackson/pen/OXXwWq
https://codepen.io/ig_design/pen/omQXoQ
https://codepen.io/craftjd/pen/QYBKPp
https://codepen.io/FilipVitas/pen/NoOmrE
https://codepen.io/tiffachoo/pen/JyWmbR



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