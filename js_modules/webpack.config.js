const path = require('path'); /// nodejs package

const config = { 
    /// relative to root dir
    entry: './src/index.js', /// relative file reference
    /// where to save files bundled
    output: {
        path: path.resolve(__dirname, 'build'), 
        /// absolute file reference using path module
        /// path.resolve makes path valid for any OS windows, mac, linux...
        filename: 'bundle.js' // any name is valid
    }
};

module.exports = config;