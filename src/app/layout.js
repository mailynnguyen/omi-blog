import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation.jsx";
import Footer from "@/components/Footer.jsx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hi, I'm Omi the Dog!",
  description: "Pictures of me and my life!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-omi-gray-100 ${inter.className}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
