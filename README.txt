/****************************************/
*Install the following to use Browserify:*
/****************************************/
npm install -g browserify

npm install browserify-shim

The required package.json file for browserify should not be created from Visual Studio.  If you do so, browserify won't work. To workaround this issue, open up the package.json file in NotePad++, and save as UTF-8 without BOM.

npm install deamdify
npm install deglobalify

browserify -t deamdify Scripts/main.js -o Scripts/bundle.js