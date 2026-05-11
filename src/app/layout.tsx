import type { Metadata } from "next";
import ChatWidgetClient from "@/components/ChatWidgetClient";
import "./globals.css";

export const metadata: Metadata = {
  title: "JJ2L Services | Outdoor Living Improvements",
  description: "Professional Fence, Paver and Artificial Grass Installation for Homeowners in Florida.",
  icons: {
    icon: '/favicon.ico',
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
        {children}
        <ChatWidgetClient />
      </body>
    </html>
  );
}
