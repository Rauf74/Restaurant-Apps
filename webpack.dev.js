const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: path.resolve(__dirname, "dist"),
        open: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        compress: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
});
