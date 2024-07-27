import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import NavBar from "./components/Navbar";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <NavBar /> */}
        <span className="block">{children}</span>
      </body>
    </html>
  );
}
