var fs = require('hexo-fs');
var allcontent = '';

var contents = [
    'themes//*your-theme-name-here*//source/css//*css-file-name-here*/.css', // Fill out the line like shown at the example
    'themes/test/source/css/global.css', // Example
    'themes/test/source/css/navbar.css', // Example
    // Add the lines in the order you would like to have the codes
];

for (i = 0; i < contents.length; i++) {
    allcontent = allcontent + fs.readFileSync(contents[i]) + ' ';
}


var CleanCSS = require('clean-css');
var input = allcontent;
var options = {  };
var output = new CleanCSS(options).minify(input);

hexo.extend.generator.register('css-merge', function (locals) {

    return {

        path: '/css/main.css',
        data: function(){
            return output.styles;
        }

    };

});
