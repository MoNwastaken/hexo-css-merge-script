var fs = require('hexo-fs');

var contents = fs.readFileSync('themes\\/*your-theme-name-here*/\\source\\css\\/*css-file-name-here*/.css'); // Fill out the line like shown at the example
var contents2 = fs.readFileSync('themes\\landscape\\source\\css\\navbar.css'); // Example
var allcontent = contents + contents2; // Add the files together in the order you would like to have the codes

var CleanCSS = require('clean-css');
var input = allcontent;
var options = {  };
var output = new CleanCSS(options).minify(input);

hexo.extend.generator.register('css-merge', function (locals) {

    return {

        path: '/css/main.css', // Merged and minified css file's path and name
        data: function(){
            return output.styles;
        }

    };

});