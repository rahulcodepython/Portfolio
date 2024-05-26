import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

export const metadata = {
    title: 'Rahul Das | Full Stack Developer',
    description: 'This is a personal portfolio website to describe me and also my experties and specialities even my services delivered by Rahul Das.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <meta name='google-site-verification' content='r8h5jzR7gIadUgo08yu2g1rBugd24XFzS7Wa6P5tomw' />
            <body className="bg-[url('/background.png')] bg-cover bg-fixed">
                {children}
                <Toaster />
            </body>
        </html>
    );
}
