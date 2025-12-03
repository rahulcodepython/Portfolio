"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/lib/database/schema";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

export default function Projects({ projects }: { projects: Project[] }) {
	return (
		<section id="projects" className="py-20 px-4 bg-muted/30">
			<div className="container mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						<span className="text-primary font-mono">{"<"}</span>
						Projects
						<span className="text-primary font-mono">{" />"}</span>
					</h2>
					<div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
					<p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
						A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
					</p>
				</motion.div>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{
						projects.map((project, index) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ y: -5 }}
							>
								<Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden h-full flex flex-col bg-card pt-0">
									{/* Project Image */}
									<div className="relative h-48 overflow-hidden bg-muted">
										<img
											src={project.image_url ?? "/01.jpg"}
											alt={project.title}
											fill
											className="object-cover transition-transform duration-300 hover:scale-110"
										/>
										{project.featured && (
											<div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
												<Star className="w-3 h-3 fill-current" />
												Featured
											</div>
										)}
									</div>

									<CardContent className="flex-1 flex flex-col">
										<h3 className="text-xl font-bold mb-2">{project.title}</h3>
										<p className="text-sm text-muted-foreground mb-4 flex-1">
											{project.description}
										</p>

										{/* Technologies */}
										<div className="flex flex-wrap gap-2 mb-4">
											{
												project.technologies.split(",").map((tech) => (
													<Badge
														key={tech}
														variant="secondary"
														className="font-mono text-xs"
													>
														{tech}
													</Badge>
												))
											}
										</div>

										{/* Action Buttons */}
										<div className="flex gap-2">
											{project.live_url && (
												<Button
													size="sm"
													className="flex-1 font-mono"
													asChild
												>
													<a href={project.live_url} target="_blank" rel="noopener noreferrer">
														<ExternalLink className="w-4 h-4 mr-2" />
														Live Demo
													</a>
												</Button>
											)}
											{project.github_url && (
												<Button
													size="sm"
													variant="outline"
													className={`${!project.live_url ? "flex-1" : ""} font-mono`}
													asChild
												>
													<a href={project.github_url} target="_blank" rel="noopener noreferrer">
														<Github className="w-4 h-4 mr-2" />
														Code
													</a>
												</Button>
											)}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))
					}
				</div>
			</div>
		</section>
	);
}
