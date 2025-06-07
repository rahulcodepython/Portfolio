import Footer from "@/components/footer";
import ScrollUp from "@/components/scroll-up";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});


export const metadata: Metadata = {
    title: 'Rahul Das | Full Stack Developer',
    description: 'This is a personal portfolio website to describe me and also my experties and specialities even my services delivered by Rahul Das.',
    keywords: ['Full Stack Developer', 'Next.js', 'React.js', 'Django', 'Portfolio', 'Rahul Das', 'Docker', 'rahulcodepython'],
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={`${montserrat.variable} antialiased scroll-smooth`}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    {children}
                    <Footer />
                </ThemeProvider>
                <Toaster />
                <ScrollUp />
            </body>
        </html>
    );
}
