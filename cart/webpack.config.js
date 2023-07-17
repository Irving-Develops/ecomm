const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Module } = require("module");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development", 
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({ //this is used to create the remoteEntry.js file
      name: "cart",  //this name is used in the container webpack config
      filename: "remoteEntry.js", //default name
      exposes: {
        "./CartShow": "./src/index", //aliases for the files we want to expose
      },
      shared: ["faker"], //this is used to share dependencies between the container and the module
    }),
    new HtmlWebpackPlugin({ //this is used to generate the index.html file
      template: "./public/index.html",
    }),
  ],
};
