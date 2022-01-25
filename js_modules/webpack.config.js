const path = require('path'); /// nodejs package
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = { 
    /// relative to root dir
    entry: './src/index.js', /// relative file reference
    /// where to save files bundled
    output: {
        path: path.resolve(__dirname, 'build'), 
        /// absolute file reference using path module
        /// path.resolve makes path valid for any OS windows, mac, linux...
        filename: 'bundle.js' // any name is valid
    },
    module: {
        /// configuring rules for babel
        rules: [
            ///babel rule to load js
            {
                /// which loader to use
                use: 'babel-loader',
                /// test needs regular expressions.
                test: /\.js$/  // only use babel in js files 
            },
            ///css rule to load css 
            {
                use: ['style-loader', 'css-loader'], //rigth to left  1st css-loader then style-loader
                test: /\.css$/
            }
        ]
    }
};

module.exports = config;