import { Roboto, Inter, Montserrat } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-family', 
});

export const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--second-family',
});

export const montserrat = Montserrat({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--third-family',
});