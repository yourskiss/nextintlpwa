const withPWA = require('next-pwa')({
    /*
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/',
    sw: 'sw.js',
    reloadOnOnline: true,
    dynamicStartUrl: true,
    fallBacks: {document: '/assets/offline.html' }
*/
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    rewritePaths: [
      {
        from: /^\/$/,
        to: '/assets/offline.html',
      },
    ],


  });
  
 const createNextIntlPlugin = require('next-intl/plugin');
 const withNextIntl = createNextIntlPlugin();

  module.exports = withNextIntl(withPWA({
    reactStrictMode: true,
  }));





