"use client";

import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { githubUrl, projects, type Project } from "@/lib/data";
import { motion } from "motion/react";
import { ArrowUpRight, Check, Github } from "lucide-react";

const hostOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

// Browser-style frame around a site screenshot
function SitePreview({ image, title, liveUrl }: Project) {
	return (
		<div className="flex h-full flex-col">
			<div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-2.5">
				<div className="flex gap-1.5">
					<span className="h-2.5 w-2.5 rounded-full bg-red-400" />
					<span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
					<span className="h-2.5 w-2.5 rounded-full bg-green-400" />
				</div>
				<span className="ml-2 truncate rounded-md bg-background/80 px-3 py-0.5 text-xs text-muted-foreground font-mono">
					{liveUrl ? hostOf(liveUrl) : title}
				</span>
			</div>
			<div className="relative flex-1 overflow-hidden">
				<img
					src={image!}
					alt={`${title} screenshot`}
					loading="lazy"
					className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
				/>
			</div>
		</div>
	);
}

// Terminal-style preview for CLI projects without a website
function TerminalPreview() {
	return (
		<div className="flex h-full flex-col bg-zinc-950 text-zinc-300">
			<div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
				<div className="flex gap-1.5">
					<span className="h-2.5 w-2.5 rounded-full bg-red-400" />
					<span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
					<span className="h-2.5 w-2.5 rounded-full bg-green-400" />
				</div>
				<span className="ml-2 text-xs text-zinc-500 font-mono">~/projects</span>
			</div>
			<div className="flex-1 space-y-1 p-5 font-mono text-xs sm:text-sm leading-relaxed">
				<p>
					<span className="text-green-400">$</span> ppm init myapp -t fastapi -y
				</p>
				<p className="text-zinc-400"><span className="text-green-400">✓</span> Created ppm.yml, .env, .gitignore, src/main.py</p>
				<p className="text-zinc-400"><span className="text-sky-400">›</span> Creating virtual environment in .venv (uv)</p>
				<p className="text-zinc-400"><span className="text-green-400">✓</span> Git repository initialized on branch main</p>
				<p className="pt-2">
					<span className="text-green-400">$</span> cd myapp && ppm run
				</p>
				<p className="text-zinc-500">&gt; python -m uvicorn main:app --reload</p>
				<p className="text-zinc-400">INFO: Uvicorn running on http://127.0.0.1:8000</p>
				<p className="text-green-400 animate-pulse">▋</p>
			</div>
		</div>
	);
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
			viewport={{ once: true }}
			className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
		>
			<div className="relative aspect-16/10 overflow-hidden border-b border-border">
				{project.image ? <SitePreview {...project} /> : <TerminalPreview />}
				<Badge className="absolute bottom-3 left-3 shadow">{project.category}</Badge>
			</div>

			<div className="flex flex-1 flex-col p-6">
				<div className="mb-2 flex items-start justify-between gap-3">
					<h3 className="text-xl font-bold leading-tight">{project.title}</h3>
					{(project.liveUrl ?? project.githubUrl) && (
						<a
							href={(project.liveUrl ?? project.githubUrl)!}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Open ${project.title}`}
							className="shrink-0 rounded-full border border-border p-1.5 text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary"
						>
							<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</a>
					)}
				</div>

				{project.builtFor && (
					<p className="mb-3 text-sm text-muted-foreground">
						Product built for{" "}
						<a
							href={project.builtFor.href}
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium text-primary hover:underline"
						>
							{project.builtFor.name}
						</a>
					</p>
				)}

				<p className="mb-4 text-sm text-muted-foreground leading-relaxed">{project.description}</p>

				<ul className="mb-5 space-y-1.5">
					{project.highlights.map((highlight) => (
						<li key={highlight} className="flex items-start gap-2 text-sm">
							<Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
							<span>{highlight}</span>
						</li>
					))}
				</ul>

				<div className="mt-auto flex flex-wrap gap-2 mb-5">
					{project.technologies.map((tech) => (
						<Badge key={tech} variant="secondary" className="font-mono text-xs">
							{tech}
						</Badge>
					))}
				</div>

				<div className="flex gap-2">
					{project.liveUrl && (
						<Button size="sm" className="flex-1 rounded-full" asChild>
							<a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
								Visit {hostOf(project.liveUrl)}
								<ArrowUpRight className="h-4 w-4" />
							</a>
						</Button>
					)}
					{project.githubUrl && (
						<Button
							size="sm"
							variant={project.liveUrl ? "outline" : "default"}
							className="flex-1 rounded-full"
							asChild
						>
							<a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
								<Github className="h-4 w-4" />
								View on GitHub
							</a>
						</Button>
					)}
				</div>
			</div>
		</motion.article>
	);
}

export default function Projects() {
	return (
		<section id="projects" className="py-20 px-4 bg-muted/30">
			<div className="container mx-auto max-w-6xl">
				<SectionHeading
					title="Projects"
					subtitle="Products and tools I've designed, built and shipped."
				/>

				<div className="grid gap-8 md:grid-cols-2">
					{projects.map((project, index) => (
						<ProjectCard key={project.title} project={project} index={index} />
					))}
				</div>

				<div className="text-center mt-12">
					<Button variant="outline" className="rounded-full" asChild>
						<a href={githubUrl} target="_blank" rel="noopener noreferrer">
							<Github className="w-4 h-4" />
							More on GitHub
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}
