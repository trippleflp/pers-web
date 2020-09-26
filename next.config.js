module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
     config.module.rules.push(
        // {
        //   test: /\.tsx/,
        //   loader: "babel-loader",
        //   exclude: /node_modules/
        // },

        
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            "@teamsupercell/typings-for-css-modules-loader",
            {
              loader: "css-loader",
              options: { modules: true }
            }
          ]
        }

      )
      // Important: return the modified config
      return config
    },
  }