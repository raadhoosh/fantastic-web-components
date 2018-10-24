const path = require('path');
module.exports = {
    propsParser: require('react-docgen-typescript').parse,
    webpackConfig: require('react-scripts-ts/config/webpack.config.dev'),
    styleguideComponents: {
      Wrapper: path.join(__dirname,'src/styleguide/ThemeWrapper'),
    }
  }