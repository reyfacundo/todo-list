const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',

    devtool: 'source-map',

    performance: {
        hints: 'warning', // 'warning' will show asset size warnings, 'error' will show asset size errors
        maxAssetSize: 500000, // Warn if an asset exceeds 500 KB
        maxEntrypointSize: 1000000, // Warn if an entry point exceeds 1 MB
    }
});
