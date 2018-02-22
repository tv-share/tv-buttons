const path = require("path");
const poststylus = require("poststylus");
// const webpack = require("webpack");

module.exports = {
	entry: [
		"babel-polyfill",
		path.join(__dirname, "index")
	],
	devtool: "#eval-source-map",
	output: {
		path: __dirname,
		filename: "bundle.min.js",
		publicPath: "/"
  },
	module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ["stage-0", "es2015", "react" ]
              }
            }
          },
          {
            test: /\.styl$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'stylus-loader',
                options: {
                  use: [poststylus()],
                },
              },
            ],
          }
        ]
      }
};