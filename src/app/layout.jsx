import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
	title: 'Rahul Das | Full Stack Developer',
	description: 'This is a personal portfolio website to describe me and also my experties and specialities even my services delivered by Rahul Das.',
	keywords: ['Full Stack Developer', 'Next.js', 'React.js', 'Django', 'Portfolio', 'Rahul Das', 'Docker', 'rahulcodepython'],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth" suppressHydrationWarning>
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<meta name='google-site-verification' content='r8h5jzR7gIadUgo08yu2g1rBugd24XFzS7Wa6P5tomw' />
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<FlickeringGrid
						className="absolute inset-0 z-0 size-full w-full h-full"
						squareSize={2}
						gridGap={6}
						color="#6B7280"
						maxOpacity={0.5}
						flickerChance={0.1}
					/>
					{children}
					<SpeedInsights />
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
