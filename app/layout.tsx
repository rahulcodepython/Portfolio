import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"
import { JetBrains_Mono, Montserrat } from "next/font/google"
import type React from "react"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
    metadataBase: new URL("https://rahulcodepython.in"),
    title: "Rahul Das | Full Stack Developer",
    description: "Portfolio of Rahul Das, a Full Stack Developer from West Bengal, India building web apps with Next.js, NestJS, Golang and PostgreSQL. Open to freelance work.",
    keywords: ["Full Stack Developer", "Freelance Developer", "Next.js", "React.js", "NestJS", "Golang", "PostgreSQL", "Portfolio", "Rahul Das", "rahulcodepython"],
    openGraph: {
        title: "Rahul Das | Full Stack Developer",
        description: "Full Stack Developer building fast, production-ready web apps. Open to freelance work.",
        images: ["/01.jpg"],
        type: "website",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`antialiased ${montserrat.variable} ${jetbrainsMono.variable} font-sans`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    {children}
                    <Toaster richColors position="top-center" />
                </ThemeProvider>
            </body>
        </html>
    )
}
