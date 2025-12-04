import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

const faviconSvg = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='#0ea5e9'/><text x='50%' y='58%' text-anchor='middle' font-family='system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif' font-size='36' font-weight='700' fill='white'>V</text></svg>`
);

export const metadata: Metadata = {
  // title: 'Visamart — Coming Soon',
  description: 'Be the first to know when we go live.',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff", // or your color
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

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />

      </head>
      <body className={`${inter.className} font-wix. bg-[#f6fafd]`}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
