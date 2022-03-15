const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    webpack: {
        alias: {},
        plugins: {
            add: [new NodePolyfillPlugin({
                excludeAliases: ["console"]
            }),]
        },
        configure: (webpackConfig, {env, paths}) => {
            return webpackConfig;
        },

    },
}
