import { ubuntu } from "@components/fonts";
import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next-test",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={ubuntu.className}>
        {children}
        <Toaster
          richColors
          position="bottom-right"
          visibleToasts={1}
          duration={3000}
        />
      </body>
    </html>
  );
}
