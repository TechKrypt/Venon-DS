import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// SEO metadata (no need to declare icons here)
export const metadata = {
  title: 'Venon Digital Solutions',
  description: 'Bold, Powerful & Functional Websites',
  openGraph: {
    title: 'Venon Digital Solutions',
    description: 'Bold, Powerful & Functional Websites that drive results.',
    url: 'https://venondigital.com',
    siteName: 'Venon Digital Solutions',
    images: [
      {
        url: '/VDS logon.ico',
        width: 1200,
        height: 630,
        alt: 'Venon Digital Solutions Website Screenshot',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venon Digital Solutions',
    description: 'Bold, Powerful & Functional Websites that drive results.',
    images: ['/VDS OG.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ .ico favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* ✅ Invisible reCAPTCHA script (optional) */}
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
