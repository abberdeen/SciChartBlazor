const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
module.exports = {
    mode: "development",
    entry: {
        index: './src/SciChartBlazor.Charts2D/Interop/Index.ts', 
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, './src/SciChartBlazor.Charts2D/Interop'), "node_modules"],
        extensions: ['.ts', '.js'],
    }, 
    output: {
        filename: 'scichartblazor-chart2d.min.js',
        path: path.resolve(__dirname, './src/SciChartBlazor.Charts2D/wwwroot'),
        library: "sciChartBlazor"
    },
    plugins: [
        //new CopyPlugin({
        //    patterns: [ 
        //        { from: "node_modules/scichart/_wasm/scichart2d.data", to: "" },
        //        { from: "node_modules/scichart/_wasm/scichart2d.wasm", to: "" }
        //    ]
        //})
    ]
};