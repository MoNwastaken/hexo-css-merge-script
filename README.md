# hexo-css-merge-script
A script to merge css files and then minify after generating in hexo.

## Quick start
To use the script just put the `hexo-css-merge-script.js` file inside the following folder
```
*your-hexo-project*/themes/scripts
```
If you don't have a scripts folder make one there.

For the script to work you have to run the following command inside your hexo project
```
npm install clean-css
```

## Detailed starting info
Fill out the line like shown at the example
```
var contents = fs.readFileSync('themes\\**your-theme-name-here**\\source\\css\\**css-file-name-here**.css');
```
Example: 
```
var contents2 = fs.readFileSync('themes\\landscape\\source\\css\\navbar.css');
```
Add the files together in the order you would like to have the codes
```
var allcontent = contents + contents2;
```
Merged and minified css file's path and name
```
path: '/css/main.css',
```
**That's it! Now it's enough to call one css file in the header instead of many.**
```
In this example case all of my css codes will be found in the main.css file.
```
