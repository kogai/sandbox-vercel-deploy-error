const SentryWebpackPlugin = require('@sentry/webpack-plugin');

module.exports = {
  webpack: (config, { isServer }) => {
    // NOTE: Workaround for https://github.com/getsentry/sentry-javascript/issues/2378
    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    return {
      ...config,
      plugins: config.plugins.concat(
        process.env.VERCEL_GITHUB_COMMIT_SHA == null
          ? []
          : [
              new SentryWebpackPlugin({
                include: '.next',
                ignore: ['node_modules', '.vscode'],
                urlPrefix: '~/_next',
                release: process.env.VERCEL_GITHUB_COMMIT_SHA,
              }),
            ]
      ),
    };
  },
  // TODO: Separate settings for each stages.
  experimental: {
    documentMiddleware: true,
  },
};
