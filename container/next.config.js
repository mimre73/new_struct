const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    app1: `app1@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    app2: `app2@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'container',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          "./store/types": "./src/core/types/storeState.ts",
          "./store/hooks": "./src/core/store/hooks/useStore.ts",
          "./store/selectors": "./src/core/store/hooks/useStoreSelector.ts",
          "./store/provider": "./src/core/store/providers/storeProvider.tsx",
          "./enums": "./src/core/domain/enums/index.ts"
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
