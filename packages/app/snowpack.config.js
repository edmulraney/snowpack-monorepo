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
  ],
  optimize: {
  },
  packageOptions: {
  },
  devOptions: {
  },
  buildOptions: {
  },
  alias: {
    '@edmulraney/launch-kit': '../launch-kit',
    '@edmulraney/components': '../components'
  }
};
