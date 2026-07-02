import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://nidhivan-ls.vercel.app/'),
  title: {
    default: 'Nidhivan | Wedding Garden',
    template: '%s | Nidhivan',
  },
  description:
    'Nidhivan is a serene wedding garden for elegant ceremonies, intimate gatherings, and memorable celebrations surrounded by warm natural beauty.',
  keywords: [
    'Nidhivan',
    'Wedding Garden',
    'Garden Wedding Venue',
    'Wedding Garden Hall',
    'Luxury Wedding Venue',
    'Wedding Celebration Space',
  ],
  authors: [{ name: 'Nidhivan' }],
  openGraph: {
    title: 'Nidhivan | Wedding Garden',
    description:
      'A calm, elegant wedding garden for intimate celebrations, graceful ceremonies, and timeless moments.',
    url: '/',
    siteName: 'Nidhivan',
    images: [
      {
        url: '/images/demo1.png',
        width: 1200,
        height: 630,
        alt: 'Nidhivan wedding garden preview image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nidhivan | Wedding Garden',
    description:
      'A refined wedding garden venue with calm surroundings, elegant spaces, and timeless celebration vibes.',
    images: ['/images/demo1.png'],
  },
};

const zaslia = localFont({
  src: [
    {
      path: '../../public/fonts/zaslia-font/Zaslia.otf',
      weight: '800',
    },
  ],
  variable: '--font-zaslia',
});

const orange = localFont({
  src: [
    {
      path: '../../public/fonts/orange-font.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-orange',
});

const runalto = localFont({
  src: [
    {
      path: '../../public/fonts/Runalto.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-runalto',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${orange.variable} ${zaslia.variable} ${runalto.variable}`}>
      <body className="bg-[#fff5dc] text-[#3b2522] antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}