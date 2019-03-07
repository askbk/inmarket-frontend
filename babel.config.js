module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', {
      modules: false,
      targets: {
        browsers: [
          'Android >= 5',
          'IOS >= 9.3',
          'Edge >= 15',
          'Safari >= 9.1',
          'Chrome >= 49',
          'Firefox >= 31',
          'Samsung >= 5',
        ],
      },
    }],
  ],
  plugins: [
    // "@babel/plugin-transform-runtime",
    "transform-class-properties",
    "@babel/plugin-proposal-class-properties"
  ],
};

/*"transform-class-properties" trengs for å bruke class properties*/
