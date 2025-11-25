"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skill } from "@/lib/database/schema";
import { motion } from "framer-motion";
import {
	Cloud,
	Code2,
	Database,
	Palette,
	Server,
	Wrench,
} from "lucide-react";

export default function Skills({ skills }: { skills: Skill[] }) {
	const skillCategories = [
		{
			icon: Code2,
			title: "Frontend",
			key: "frontend",
			color: "text-blue-500",
			bgColor: "bg-blue-500/10",
			borderColor: "border-blue-500/20",
			skills: skills.filter((skill) => skill.category === "frontend").map((skill) => skill.name),
		},
		{
			icon: Server,
			title: "Backend",
			key: "backend",
			color: "text-green-500",
			bgColor: "bg-green-500/10",
			borderColor: "border-green-500/20",
			skills: skills.filter((skill) => skill.category === "backend").map((skill) => skill.name),
		},
		{
			icon: Database,
			title: "Database",
			key: "database",
			color: "text-purple-500",
			bgColor: "bg-purple-500/10",
			borderColor: "border-purple-500/20",
			skills: skills.filter((skill) => skill.category === "database").map((skill) => skill.name),
		},
		{
			icon: Wrench,
			title: "DevOps",
			key: "devops",
			color: "text-orange-500",
			bgColor: "bg-orange-500/10",
			borderColor: "border-orange-500/20",
			skills: skills.filter((skill) => skill.category === "devops").map((skill) => skill.name),
		},
		{
			icon: Cloud,
			title: "Deployment",
			key: "deployment",
			color: "text-cyan-500",
			bgColor: "bg-cyan-500/10",
			borderColor: "border-cyan-500/20",
			skills: skills.filter((skill) => skill.category === "deployment").map((skill) => skill.name),
		},
		{
			icon: Palette,
			title: "Others",
			key: "others",
			color: "text-pink-500",
			bgColor: "bg-pink-500/10",
			borderColor: "border-pink-500/20",
			skills: skills.filter((skill) => skill.category === "others").map((skill) => skill.name),
		},
	];

	return (
		<section id="skills" className="py-20 px-4 bg-muted/30">
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
						Skills
						<span className="text-primary font-mono">{" />"}</span>
					</h2>
					<div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
					<p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
						A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{skillCategories.map((category, index) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<Card className={`border-2 ${category.borderColor} hover:shadow-lg transition-all duration-300 h-full bg-card`}>
								<CardContent className="">
									<div className="flex items-center gap-3 mb-6">
										<div className={`p-3 rounded-lg ${category.bgColor} border ${category.borderColor}`}>
											<category.icon className={`w-6 h-6 ${category.color}`} />
										</div>
										<h3 className="text-xl font-bold">{category.title}</h3>
									</div>

									<div className="flex flex-wrap gap-2">
										{category.skills.map((skill, skillIndex) => (
											<motion.div
												key={skill}
												initial={{ opacity: 0, scale: 0.8 }}
												whileInView={{ opacity: 1, scale: 1 }}
												transition={{
													duration: 0.3,
													delay: index * 0.1 + skillIndex * 0.05,
												}}
												viewport={{ once: true }}
												whileHover={{ scale: 1.05 }}
											>
												<Badge
													variant="secondary"
													className="font-mono text-xs px-3 py-1 hover:bg-primary/20 transition-colors cursor-default"
												>
													{skill}
												</Badge>
											</motion.div>
										))}
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
