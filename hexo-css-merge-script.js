var fs = require('hexo-fs');

var contents = fs.readFileSync('themes\\landscape\\source\\css\\global.css');
var contentstwo = fs.readFileSync('themes\\landscape\\source\\css\\navbar.css');
var allcontent = contents + contentstwo;

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