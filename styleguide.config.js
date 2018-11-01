const path = require('path');
const glob = require('glob');
const { version } = require('./package');

module.exports = {
  title: 'Fantastic Web Components',
  propsParser: require('react-docgen-typescript').parse,
  version,
  getComponentPathLine: componentPath => {
    const name = path.dirname(componentPath).match(/.*\\(.*)$/);
    const dir = path.dirname(componentPath);
    return `import ${name[1]} from '${dir}';`;
  },
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev'),
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/ThemeWrapper'),
  }
}