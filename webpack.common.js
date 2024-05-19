const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src/scripts/index.js"),
        sw: path.resolve(__dirname, "src/scripts/sw.js"),
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]',
                },
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 70000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "src/templates/index.html"),
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, "src/public/"),
                to: path.resolve(__dirname, "dist/public/"),
                globOptions: {
                    // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
                    ignore: ['**/hero/**'],
                },
            },
            ],
        }),
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, "src/public/images/splash-screen.png"),
        }),
        new CleanWebpackPlugin(),
        new ImageminWebpackPlugin({
            plugins: [
                ImageminMozjpeg({
                    quality: 50,
                    progressive: true,
                }),
            ],
            imageminOptions: {
                plugins: [
                    ['imagemin-maximum-compress', { max: 200 }]
                ]
            }
        }),
        // new BundleAnalyzerPlugin(),
    ],
};
