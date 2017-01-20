({

  // TO RUN THE BUILD, GET TO THIS DIR IN THE COMMAND LINE AND RUN: node r.js -o app.build.js

  // The path of the dev files (main shouild be directly underneath this)
  baseUrl: '../js',
    dir: 'js',
  // Output everything to one minified file

  // Comment out the below line to minify using UglifyJS
  //optimize: "none",

  // Build from the app folder (relative to baseUrl)
  namespace: 'foo',

  // Set paths for libs
  paths: {
      jquery: 'lib/jquery',
      requireLib: 'lib/require'
  },
    modules: [
	{
	    name: 'foo',
	    include: ['requireLib','app'],
	    create: true
	}
    ]

})


