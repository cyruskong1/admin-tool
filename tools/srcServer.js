import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import open from "open";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

// start configuring express
app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(require("webpack-hot-middleware")(compiler));

// serve index.html for all requests -- since this is a SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, err => {
  if (err) {
    console.log("server error: ", err); // eslint-disable-line no-console
  } else {
    open(`http://localhost:${port}`);
  }
});
