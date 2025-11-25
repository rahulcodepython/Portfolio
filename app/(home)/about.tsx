"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Sparkles, Target, Zap } from "lucide-react";

export default function About() {
	const highlights = [
		{
			icon: Code2,
			title: "Clean Code",
			description: "Writing maintainable and scalable solutions",
		},
		{
			icon: Zap,
			title: "Fast Performance",
			description: "Optimized for speed and efficiency",
		},
		{
			icon: Target,
			title: "Problem Solver",
			description: "Turning challenges into opportunities",
		},
		{
			icon: Sparkles,
			title: "Innovation",
			description: "Always exploring cutting-edge technologies",
		},
	];

	return (
		<section id="about" className="py-20 px-4 relative">
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
						About Me
						<span className="text-primary font-mono">{" />"}</span>
					</h2>
					<div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
					{/* Image/Visual Section */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="relative"
					>
						<div className="relative bg-linear-to-br from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/20">
							<div className="bg-card rounded-xl p-6 font-mono text-sm">
								<div className="flex items-center gap-2 mb-4">
									<div className="flex gap-2">
										<div className="w-3 h-3 rounded-full bg-red-500"></div>
										<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
										<div className="w-3 h-3 rounded-full bg-green-500"></div>
									</div>
									<span className="text-muted-foreground text-xs ml-2">developer.py</span>
								</div>
								<div className="space-y-2">
									<div>
										<span className="text-purple-500">class</span>{" "}
										<span className="text-yellow-500">Developer</span> {":"}
									</div>
									<div className="pl-4">
										<span className="text-purple-500">def</span>{" "}
										<span className="text-yellow-500">__init__</span>
										<span>(self, name, role, location, passion):</span>
									</div>
									<div className="pl-8">
										<span className="text-blue-400">self.name</span> = <span className="text-green-500">
											"Rahul Das"
										</span>
									</div>
									<div className="pl-8">
										<span className="text-blue-400">self.role</span> = <span className="text-green-500">
											"Full Stack Developer"
										</span>
									</div>
									<div className="pl-8">
										<span className="text-blue-400">self.experience</span> = <span className="text-green-500">
											"1 Years"
										</span>
									</div>
									<div className="pl-8">
										<span className="text-blue-400">self.location</span> = <span className="text-green-500">
											"India"
										</span>
									</div>
									<div className="pl-8">
										<span className="text-blue-400">self.passion</span> = <span className="text-green-500">
											"Building Amazing Products"
										</span>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Content Section */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						<p className="text-lg text-muted-foreground leading-relaxed">
							I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> with expertise in building modern web applications. I specialize in creating scalable, performant, and user-friendly solutions using cutting-edge technologies.
						</p>
						<p className="text-lg text-muted-foreground leading-relaxed">
							With a strong foundation in both frontend and backend development, I bring ideas to life through clean code, thoughtful architecture, and attention to detail. I'm constantly learning and adapting to new technologies to deliver the best possible solutions.
						</p>
						<p className="text-lg text-muted-foreground leading-relaxed">
							When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
						</p>
					</motion.div>
				</div>

				{/* Highlights Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{highlights.map((item, index) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur">
								<CardContent className="">
									<div className="flex flex-col items-center text-center space-y-3">
										<div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
											<item.icon className="w-6 h-6 text-primary" />
										</div>
										<h3 className="font-semibold text-lg">{item.title}</h3>
										<p className="text-sm text-muted-foreground">{item.description}</p>
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
