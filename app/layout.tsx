import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import type React from "react"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: 'Rahul Das | Full Stack Developer',
    description: 'This is a personal portfolio website to describe me and also my experties and specialities even my services delivered by Rahul Das.',
    keywords: ['Full Stack Developer', 'Next.js', 'React.js', 'Django', 'Portfolio', 'Rahul Das', 'Docker', 'rahulcodepython'],
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
        ],
        apple: "/apple-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={`antialiased ${montserrat.className}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Toaster />
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    )
}
