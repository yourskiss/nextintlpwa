const withPWA = require('next-pwa')({
    dest: 'public',
    disable: false, // process.env.NODE_ENV === 'development',
    register: true,
    scope: '/app',
    sw: 'sw.js',
    /* runtimeCaching: [
        {
          urlPattern: /^https:\/\/example\.com\/.*\.(png|jpg|jpeg|svg|gif)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
            },
          },
        },
      ], */
    reloadOnOnline: true,
    dynamicStartUrl: true,
    fallBacks: {document: '/assets/offline.html' }
  });
  
 const createNextIntlPlugin = require('next-intl/plugin');
 const withNextIntl = createNextIntlPlugin();

  module.exports = withNextIntl(withPWA({
    reactStrictMode: true,
  }));





