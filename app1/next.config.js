const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    container: `container@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
    app2: `app2@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app1',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './test': './src/pages/test.tsx',
          './dashboard': './src/pages/dashboard.tsx',
          './pages-map': './pages-map.js',
          './header': './src/core/presentation/components/@shared/header/header.tsx',
          './users': './src/pages/users.tsx',
          './components/mojtaba': './src/core/presentation/components/@shared/mojtaba.tsx',

        },
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions:{
          exposePages: true
        }
      }),
    );

    return config;
  },
};
