
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComp from "./components/header/HeaderComp";
import FooterComp from "./components/footer/FooterComp";
import ContactForm from "./components/ContactForm/ContactForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Temurbek School",
  description: "Official web page of Temurbek School",
};
export default function RootLayout({ children }) {

  return (
    <html lang="en" id="HTML_item" className="dark_mode">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
    <HeaderComp />
       <main>
        {children}
        </main>
        <FooterComp/>
        <ContactForm/>
      </body>
    </html>
  );
}
