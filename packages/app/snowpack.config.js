/** @type {import('snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/',
    '../launch-kit': '/@edmulraney/launch-kit',
    '../components': '/@edmulraney/components',
   },
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-react-refresh',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
  },
  devOptions: {
  },
  buildOptions: {
    // sourceMap: true,
  },
  alias: {
    '@edmulraney/launch-kit': '../launch-kit',
    '@edmulraney/components': '../components'
  }
};
