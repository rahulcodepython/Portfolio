"use client";

import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skills, type SkillCategory } from "@/lib/data";
import { motion } from "motion/react";
import { Bot, Cloud, Code2, Database, Server, Wrench } from "lucide-react";

const categories: {
	icon: typeof Code2
	title: string
	key: SkillCategory
	tone: string
}[] = [
	{
		icon: Code2,
		title: "Frontend",
		key: "frontend",
		tone: "text-blue-500 bg-blue-500/10 border-blue-500/20",
	},
	{
		icon: Server,
		title: "Backend",
		key: "backend",
		tone: "text-green-500 bg-green-500/10 border-green-500/20",
	},
	{
		icon: Database,
		title: "Database & BaaS",
		key: "database",
		tone: "text-purple-500 bg-purple-500/10 border-purple-500/20",
	},
	{
		icon: Wrench,
		title: "DevOps",
		key: "devops",
		tone: "text-orange-500 bg-orange-500/10 border-orange-500/20",
	},
	{
		icon: Cloud,
		title: "Deployment",
		key: "deployment",
		tone: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
	},
	{
		icon: Bot,
		title: "AI & LLM Tools",
		key: "ai",
		tone: "text-pink-500 bg-pink-500/10 border-pink-500/20",
	},
];

export default function Skills() {
	return (
		<section id="skills" className="py-20 px-4 bg-muted/30">
			<div className="container mx-auto max-w-7xl">
				<SectionHeading
					title="Skills"
					subtitle="The toolkit of modern technologies, frameworks and AI tools I use to build and ship products."
				/>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{categories.map((category, index) => (
						<motion.div
							key={category.key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ y: -4 }}
						>
							<Card className="border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full bg-card">
								<CardContent>
									<div className="flex items-center gap-3 mb-6">
										<div className={`p-3 rounded-lg border ${category.tone}`}>
											<category.icon className="w-6 h-6" />
										</div>
										<div>
											<h3 className="text-xl font-bold">{category.title}</h3>
											<p className="text-xs text-muted-foreground">{skills[category.key].length} skills</p>
										</div>
									</div>

									<div className="flex flex-wrap gap-2">
										{skills[category.key].map((skill) => (
											<Badge
												key={skill}
												variant="secondary"
												className="font-mono text-xs px-3 py-1 hover:bg-primary/20 transition-colors cursor-default"
											>
												{skill}
											</Badge>
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
