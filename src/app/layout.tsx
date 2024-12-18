import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import  Footer from "./components/Footer"
import  Navbar from "./components/Navbar"




export const metadata: Metadata = {
  title: "Delivery",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon_io/favicon.ico", // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <Navbar />

        {/* <main className="container mx-auto ">{children}</main> */}
        <main className="w-full ">{children}</main>

  
        <Footer />
      </body>
    </html>
  );
}
