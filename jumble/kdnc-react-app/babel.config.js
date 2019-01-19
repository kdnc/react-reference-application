// https://babeljs.io/docs/en/configuration
// https://babeljs.io/docs/en/config-files#project-wide-configuration
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    // https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
    // https://medium.com/@jacobworrel/babels-transform-class-properties-plugin-how-it-works-and-what-it-means-for-your-react-apps-6983539ffc22
    // https://medium.freecodecamp.org/how-to-use-reactjs-with-webpack-4-babel-7-and-material-design-ff754586f618
    '@babel/plugin-proposal-class-properties'
  ],
};