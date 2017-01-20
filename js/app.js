
// For any third party dependencies, like jQuery, place them in the lib folder.

// Get absolute directory
// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
  baseUrl: '../js',
  paths: {
    app: '/app',
    jquery:'/lib/jquery'
  },
  "shim": {
        "jquery-cookie"  : ["jquery"],
        "bootstrap-tab"  : ["jquery"],
        "bootstrap-modal": ["jquery"],
        "bootstrap-alert": ["jquery"]
    }});


// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);
