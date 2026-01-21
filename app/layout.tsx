import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Harsh Shrivastava | Full Stack Engineer",
  description: "Full Stack Engineer specializing in Next.js, TypeScript, and high-performance web architecture.",
  openGraph: {
    title: "Harsh Shrivastava | Portfolio",
    description: "Building scalable web experiences with the MERN stack.",
    url: "https://harsh-shrivastava.vercel.app",
    siteName: "Harsh Shrivastava Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#030303] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}