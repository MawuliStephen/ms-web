

// import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // regular, semi-bold, bold
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"], // regular and medium
});

// export const metadata: Metadata = {
//   title: "Modern Portfolio",
//   description: "Crafted with Next.js and a modern UI",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.variable} ${ibmMono.variable} antialiased`}>
        
        {children}
      </body>
    </html>
  );
}
