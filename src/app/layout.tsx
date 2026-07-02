import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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