module.exports = ({config, mode}) => {
  const defaultConfig = config;
  return {
    ...defaultConfig,
    module: {
      ...defaultConfig.module,
      rules: [
        // Temp fix for issue: https://github.com/storybooks/storybook/issues/3346
        ...defaultConfig.module.rules.filter(rule => !(
          (rule.use && rule.use.length && rule.use.find(({ loader }) => loader === 'babel-loader'))
        )),
        {
          test: /\.jsx?$/,
          include: require('path').resolve('./'), // eslint-disable-line global-require
          exclude: /(node_modules|dist)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react-app']
            }
          }
        }
      ],
    }
  };
};
