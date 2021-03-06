export default {
  babelrc: false,
  presets: ['react'],
  plugins: [
    ['transform-runtime', {
      'polyfill': false,
      'regenerator': false
    }],
    'transform-es2015-for-of',
    'syntax-object-rest-spread',
    'transform-es2015-parameters',
    'transform-object-rest-spread',
    'syntax-async-functions',
    'bluebird-async-functions',
    'transform-es2015-arrow-functions',
    'transform-es2015-spread',
    'transform-es2015-destructuring',
    'transform-es2015-modules-commonjs',
    'transform-strict-mode'
  ]
};
