import { ubuntu } from "@components/fonts";
import NavLinks from "@components/nav-links";
import { DarkThemeToggle, Flowbite, ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next-test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={ubuntu.className}>
        <nav className="flex justify-between">
          <NavLinks />
          <div className="flex justify-end items-center gap-5 p-2">
            <p>Toggle theme</p>
            <Flowbite>
              <DarkThemeToggle className="border border-gray-500 dark:border-white" />
            </Flowbite>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
