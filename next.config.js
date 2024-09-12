const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable:  process.env.NODE_ENV === 'development',
  });
  
 const createNextIntlPlugin = require('next-intl/plugin');
 const withNextIntl = createNextIntlPlugin();

  module.exports = withNextIntl(withPWA({
    reactStrictMode: true,
  }));





