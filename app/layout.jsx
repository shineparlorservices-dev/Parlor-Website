import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CartPopup from '@/components/CartPopup';
import { CartProvider } from '@/lib/CartContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Shine Beauty Services | At-Home Luxury Salon in Bangalore',
  description:
    'Experience premium beauty and salon treatments in the comfort of your home. Serving Bangalore with professional threading, facials, waxing, and bleach.',
  keywords: 'at-home beauty services, salon at home bangalore, beauty parlour home visit, bridal facial at home, home salon services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-poppins bg-cream text-charcoal min-h-screen flex flex-col antialiased">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <CartPopup />
        </CartProvider>
      </body>
    </html>
  );
}

