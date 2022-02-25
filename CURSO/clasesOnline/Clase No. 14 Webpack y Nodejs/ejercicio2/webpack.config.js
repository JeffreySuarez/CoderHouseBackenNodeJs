const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production", // para el modo de trabajo(developtment o production)
  entry: "./src/index.ts", // para definir el punto de entrada de nuestro codigo.
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
