import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Load Fonts
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap', 
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Harsh Shrivastava | MERN Stack Developer',
  description: 'Portfolio of Harsh Shrivastava, a MERN Stack Developer specializing in scalable web applications, Next.js, and Database Architecture.',
  keywords: ['MERN Stack', 'Next.js', 'React', 'TypeScript', 'Portfolio', 'Full Stack Developer'],
  authors: [{ name: 'Harsh Shrivastava' }],
  creator: 'Harsh Shrivastava',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com', // Replace with your actual domain
    title: 'Harsh Shrivastava | MERN Stack Developer',
    description: 'Building rigorous, production-ready code. View my projects and experience.',
    siteName: 'Harsh Shrivastava Portfolio',
    images: [
      {
        url: '/og-image.png', // You need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Harsh Shrivastava Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsh Shrivastava | MERN Stack Developer',
    description: 'Building rigorous, production-ready code. View my projects and experience.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#030303] text-white">
        {children}
      </body>
    </html>
  );
}