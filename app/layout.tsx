import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Providers from "./providers";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "TravelTrucks",
  description: "TravelTrucks camper rental service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Providers>
          <Header />
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
