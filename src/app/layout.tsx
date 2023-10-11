import '@radix-ui/themes/styles.css';
import './globals.css';
import { Theme } from '@radix-ui/themes';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'Issue Tracker By Jacob Chademwiri',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Theme>
          <Navbar />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
