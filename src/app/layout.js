import { Inter, Permanent_Marker, Fredoka } from "next/font/google";
import Navigation from "@/components/Navigation.jsx";
import Footer from "@/components/Footer.jsx";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"]
 });

const permanentMarker = Permanent_Marker({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-permanent-marker",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export const metadata = {
  title: "Hi, I'm Omi the Dog!",
  description: "Pictures of me and my life!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-omi-gray-100 ${inter.className} ${fredoka.variable} ${permanentMarker.variable}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
