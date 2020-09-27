module.exports = {
  components: "./src/components/**/*.tsx",
  propsParser: require("react-docgen-typescript").parse,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx/,
          loader: "babel-loader",
          exclude: /node_modules/
        },

        
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            "@teamsupercell/typings-for-css-modules-loader",
            {
              loader: "css-loader",
              // options: { modules: true }
            }
          ]
        }

      ]
    }
  }
};
