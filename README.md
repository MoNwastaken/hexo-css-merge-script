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
'themes//*your-theme-name-here*//source/css//*css-file-name-here*/.css',
```
Example: 
```
'themes/test/source/css/global.css',
```
Add the lines in the order you would like to have the codes

Merged and minified css file's path and name
```
path: '/css/main.css',
```
**That's it! Now it's enough to call one css file in the header instead of many.**
```
In this example case all of my css codes will be found in the main.css file.
```
