# js transform
babel --presets react,es2015 js/source -d js/build
# js package
browserify js/build/app.js -o bundle.js
# css package
type CSS\components\* CSS\* > bundle.css
# css images
(Get-Content bundle.css).replace('../../images', 'images') | Set-Content bundle.css
# done
date; echo;
