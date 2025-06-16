// src/app/layout.js
import "./globals.css";
import { Nunito_Sans } from "next/font/google";

// ✅ Include all necessary font weights you may use
const nunito = Nunito_Sans({
  weight: ["400", "600", "700"], // Add more if needed (e.g., "300", "800")
  subsets: ["latin"],
  display: "swap", // Optional: improves text rendering during font load
});

export const metadata = {
  title: "Loan Management App",
  description: "Manage loans with ease using the LoanmgmtAgent panel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
