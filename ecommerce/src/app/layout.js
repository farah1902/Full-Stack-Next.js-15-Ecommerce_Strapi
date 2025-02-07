import { Roboto } from "next/font/google"
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

// Load two styles of Roboto
const robotoRegular = Roboto({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-roboto-regular"
});

const robotoBold = Roboto({ 
  subsets: ["latin"], 
  weight: "700",
  variable: "--font-roboto-bold"
});

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

export const metadata = {
  title: "Ecom Next App",
  description: "Ecom APP - Next + Strapi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${robotoRegular.variable} ${robotoBold.variable}`}>
      <body className="font-roboto-regular">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
