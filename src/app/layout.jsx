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
            <body className="bg-[url('https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Portfolio%2Fbackground.png?alt=media&token=f58b5f43-666d-4634-856a-5e200258b51d')] bg-cover bg-fixed">
                {children}
                <Toaster />
            </body>
        </html>
    );
}
