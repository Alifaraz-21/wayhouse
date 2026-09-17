import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WayHouse — Church management, made calm",
  description:
    "A polished church management product concept for people, communication, giving, teams, sermons, and member connection.",
  applicationName: "WayHouse",
  keywords: [
    "church management",
    "member portal",
    "ministry software",
    "portfolio project",
  ],
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#283d2f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className="h-full scroll-smooth antialiased" lang="en">
      <body className="flex min-h-full flex-col bg-bg text-text">
        {children}
      </body>
    </html>
  );
}
