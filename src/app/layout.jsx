import "./globals.css";
import { Courier_Prime } from "next/font/google";
import { Inter } from "next/font/google";

// Globals font
const main = Inter({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  // fallback: ["arial"],
  variable: "--customMain",
});

const courier = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  // fallback: ["system-ui", "arial"],
  variable: "--customCourier",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${courier.variable} ${main.variable}`}>
      <body className="font-main bg-slate-50">{children}</body>
    </html>
  );
}
