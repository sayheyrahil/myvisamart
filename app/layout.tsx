import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const faviconSvg = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='#0ea5e9'/><text x='50%' y='58%' text-anchor='middle' font-family='system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif' font-size='36' font-weight='700' fill='white'>V</text></svg>`
);

export const metadata: Metadata = {
  title: 'Visamart — Coming Soon',
  description: 'Be the first to know when we go live.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#0ea5e9',
  icons: {
    icon: `data:image/svg+xml;charset=UTF-8,${faviconSvg}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} font-wix`}>{children}</body>
    </html>
  );
}
