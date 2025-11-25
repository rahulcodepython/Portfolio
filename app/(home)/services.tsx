"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
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
				"Building responsive, performant, and scalable web applications using modern frameworks like React, Next.js, and Django.",
			color: "text-blue-500",
			bgColor: "bg-blue-500/10",
			borderColor: "border-blue-500/20",
		},
		{
			icon: Smartphone,
			title: "Frontend Development",
			description:
				"Creating beautiful, intuitive, and user-friendly interfaces with attention to detail and smooth animations.",
			color: "text-purple-500",
			bgColor: "bg-purple-500/10",
			borderColor: "border-purple-500/20",
		},
		{
			icon: Database,
			title: "Backend Development",
			description:
				"Developing robust and scalable backend systems with RESTful APIs, GraphQL, and efficient database design.",
			color: "text-green-500",
			bgColor: "bg-green-500/10",
			borderColor: "border-green-500/20",
		},
		{
			icon: Cloud,
			title: "Cloud Deployment",
			description:
				"Deploying and managing applications on cloud platforms like AWS, Vercel, and DigitalOcean with CI/CD pipelines.",
			color: "text-cyan-500",
			bgColor: "bg-cyan-500/10",
			borderColor: "border-cyan-500/20",
		},
		{
			icon: Palette,
			title: "UI/UX Design",
			description:
				"Designing modern, accessible, and visually appealing user interfaces with a focus on user experience.",
			color: "text-pink-500",
			bgColor: "bg-pink-500/10",
			borderColor: "border-pink-500/20",
		},
		{
			icon: ShoppingCart,
			title: "E-commerce Solutions",
			description:
				"Building complete e-commerce platforms with payment integration, inventory management, and admin dashboards.",
			color: "text-orange-500",
			bgColor: "bg-orange-500/10",
			borderColor: "border-orange-500/20",
		},
		{
			icon: Rocket,
			title: "SaaS Development",
			description:
				"Creating Software as a Service applications with subscription management, multi-tenancy, and analytics.",
			color: "text-violet-500",
			bgColor: "bg-violet-500/10",
			borderColor: "border-violet-500/20",
		},
		{
			icon: Settings,
			title: "API Development",
			description:
				"Designing and building RESTful and GraphQL APIs with proper authentication, rate limiting, and documentation.",
			color: "text-teal-500",
			bgColor: "bg-teal-500/10",
			borderColor: "border-teal-500/20",
		},
	];

	return (
		<section id="services" className="py-20 px-4">
			<div className="container mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						<span className="text-primary font-mono">{"<"}</span>
						Services
						<span className="text-primary font-mono">{" />"}</span>
					</h2>
					<div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
					<p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
						Comprehensive development services to bring your ideas to life with cutting-edge technologies.
					</p>
				</motion.div>

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
							<Card className={`border-2 ${service.borderColor} hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 h-full bg-card`}>
								<CardContent className="">
									<div className="flex flex-col items-center text-center space-y-4">
										<div className={`p-4 rounded-xl ${service.bgColor} border ${service.borderColor}`}>
											<service.icon className={`w-8 h-8 ${service.color}`} />
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
			</div>
		</section>
	);
}
