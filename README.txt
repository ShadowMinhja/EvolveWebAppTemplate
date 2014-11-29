/****************************************/
*Build Workflow:			 *
/****************************************/
1. Use Browserify to manage js dependences and bundling
2. Use Watchify to auto browserify bundle.js
3. Use msx to watch for view files from Mithril
NOT USED --> 4. Use Grunt + CSSMin managemenet

/****************************************/
*Install the following to use Browserify:*
/****************************************/
npm install -g browserify

npm install browserify-shim

The required package.json file for browserify should not be created from Visual Studio.  If you do so, browserify won't work. To workaround this issue, open up the package.json file in NotePad++, and save as UTF-8 without BOM.

/****************************************/
*Install the following to use Watchify:  *
/****************************************/
npm install -g watchify



/****************************************/
*NOT USED --> Install the following to use CSSMin: 	 *
/****************************************/
1. Install CLI:
npm install -g grunt-cli

2. Generate package.json (DO NOT RUN if File already there):
npm init

3. Install CSS Min:
npm install grunt-contrib-cssmin --save-dev
