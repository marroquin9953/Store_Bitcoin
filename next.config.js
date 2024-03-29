module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Sólo estará disponible en el lado del servidor.
    BUGSNAG_API_KEY: process.env.BUGSNAG_SERVER_API_KEY,
  },
  publicRuntimeConfig: {
    // Estará disponible tanto en el servidor como en el cliente.
    BUGSNAG_API_KEY: process.env.BUGSNAG_BROWSER_API_KEY,
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
