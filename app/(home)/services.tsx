"use client";

import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import {
	ArrowRight,
	Cloud,
	Code2,
	Database,
	Palette,
	Rocket,
	Settings,
	ShoppingCart,
	Smartphone,
} from "lucide-react";

export default function Services() {
	const services = [
		{
			icon: Code2,
			title: "Web Development",
			description:
				"Building responsive, performant, and scalable web applications using modern frameworks like Next.js, NestJS, Golang and Django.",
			tone: "text-blue-500 bg-blue-500/10 border-blue-500/20",
		},
		{
			icon: Smartphone,
			title: "Frontend Development",
			description:
				"Creating beautiful, intuitive, and user-friendly interfaces with attention to detail and smooth animations.",
			tone: "text-purple-500 bg-purple-500/10 border-purple-500/20",
		},
		{
			icon: Database,
			title: "Backend Development",
			description:
				"Developing robust and scalable backend systems with clean REST APIs and efficient PostgreSQL database design.",
			tone: "text-green-500 bg-green-500/10 border-green-500/20",
		},
		{
			icon: Cloud,
			title: "Cloud Deployment",
			description:
				"Deploying and managing applications on Cloudflare, Vercel and DigitalOcean with Docker and CI/CD pipelines.",
			tone: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
		},
		{
			icon: Palette,
			title: "UI/UX Design",
			description:
				"Designing modern, accessible, and visually appealing user interfaces with a focus on user experience.",
			tone: "text-pink-500 bg-pink-500/10 border-pink-500/20",
		},
		{
			icon: ShoppingCart,
			title: "E-commerce Solutions",
			description:
				"Building complete e-commerce platforms with payment integration, inventory management, and admin dashboards.",
			tone: "text-orange-500 bg-orange-500/10 border-orange-500/20",
		},
		{
			icon: Rocket,
			title: "SaaS Development",
			description:
				"Creating Software as a Service applications with subscription management, multi-tenancy, and analytics.",
			tone: "text-violet-500 bg-violet-500/10 border-violet-500/20",
		},
		{
			icon: Settings,
			title: "API Development",
			description:
				"Designing and building REST APIs with proper authentication, validation, and documentation.",
			tone: "text-teal-500 bg-teal-500/10 border-teal-500/20",
		},
	];

	return (
		<section id="services" className="py-20 px-4">
			<div className="container mx-auto max-w-7xl">
				<SectionHeading
					title="Services"
					subtitle="Freelance development services to bring your ideas to life, from first sketch to production."
				/>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.05 }}
							viewport={{ once: true }}
							whileHover={{ y: -5 }}
						>
							<Card className="border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 h-full bg-card">
								<CardContent>
									<div className="flex flex-col items-center text-center space-y-4">
										<div className={`p-4 rounded-xl border ${service.tone}`}>
											<service.icon className="w-8 h-8" />
										</div>
										<h3 className="text-xl font-bold">{service.title}</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{service.description}
										</p>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Freelance CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="mt-12 rounded-2xl border border-primary/20 bg-linear-to-br from-primary/10 via-purple-500/10 to-primary/10 p-8 text-center"
				>
					<h3 className="text-2xl font-bold mb-2">Open to freelance projects</h3>
					<p className="text-muted-foreground mb-6 max-w-xl mx-auto">
						Need a website, web app or API built? Tell me about your project and I'll get back to you.
					</p>
					<Button asChild size="lg" className="rounded-full">
						<a href="#contact">
							Start a project
							<ArrowRight className="w-4 h-4" />
						</a>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
