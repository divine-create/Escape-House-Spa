import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Escape House Spa | 24/7 Luxury Wellness in Maitama',
  description: 'Experience premium rejuvenation at Escape House Spa, Maitama, Abuja. Open 24/7 for the busy elite.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="bg-[#1A1A1A] text-[#F5F5F0] antialiased">
        {children}
      </body>
    </html>
  );
}
