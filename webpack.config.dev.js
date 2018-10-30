import webpack from "webpack";
import path from "path";

export default {
  debug: true, //enables displaying debug info
  devtool: "cheap-module-eval-source-map", // specify a devtool
  noInfo: false, // setting to false will make webpack display a list of all files it's bundling
  entry: [
    //entry points for application, good place to inject middlewares
    "webpack-hot-middleware/client?reload=true", // set ?reload=true tells webpack to reload the page if hmre fails
    "./src/index" //  IMPORTANT pass in app entry last
  ],
  target: "web", // webpack will bundle code in a way the browser will understand - setting to node will bundle differently
  output: {
    // tell webpack where it should create the web bundle file, webpack will not generate files, instead it will create files from memory which it will serve to the browser
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    // specify webpack devServer where our code is
    contentBase: "./src"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable us to replace modules without having to do a full brower refresh
    new webpack.NoEmitOnErrorsPlugin() // keep errors from breaking hmre experience, instead we will see a nice error message
  ],
  module: {
    // we will tell webpack what type of file we want it handle -- IMPORTANT
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "src"),
        loaders: ["babel"]
      },
      { test: /(\.css)$/, loaders: ["style", "css"] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
};
