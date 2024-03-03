const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    app1: `app1@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    container: `container@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app2',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './test': './src/pages/test.tsx',
          './sideBar': './src/core/presentation/@shared/sidebar/side-bar.tsx',
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
