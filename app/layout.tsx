import { Inter as FontSans } from "next/font/google"
import React from "react";
import { Metadata } from "next";

import { cn } from "@/lib/utils"
import './globals.css'


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'LiveDocs',
  description: 'Your go-to collaborative editor'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>

    <body
      className={cn(
        "min-h-screen font-sans antialiased",
        fontSans.variable
      )}
    >
      {children}
    </body>
    </html>
  )
}
