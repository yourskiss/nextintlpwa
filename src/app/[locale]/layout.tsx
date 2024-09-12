import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import NavigationComponent from '../../navigation';

import "./style.css";
 
 
export const metadata = {
  title: "next-intl",
  description: "next-intl",
  manifest:'/manifest.json',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/assets/images/icons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/assets/images/icons/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/assets/images/icons/apple-touch-icon.png',
    },
  ],
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
 
  return (
    <html lang={locale}>

        <meta name="background_color" content="#141414"/>
        <meta name="theme-color" content="#000000"/>

      <body>
        <NextIntlClientProvider messages={messages}>
          <NavigationComponent />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}