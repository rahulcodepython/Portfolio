"use client";

import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/lib/data";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Briefcase, Code2, Hourglass, GraduationCap, Heart, Languages, MapPin, Rocket, Sparkles, Target, Zap } from "lucide-react";

const pad = (n: number) => String(n).padStart(2, "0");

// Time since birth (taken as local midnight), split into calendar units
function lifespan(birth: Date, now: Date) {
	let years = now.getFullYear() - birth.getFullYear();
	let months = now.getMonth() - birth.getMonth();
	let days = now.getDate() - birth.getDate();
	if (days < 0) {
		months--;
		days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
	}
	if (months < 0) {
		years--;
		months += 12;
	}
	return `${years}y ${months}mo ${days}d ${pad(now.getHours())}h ${pad(now.getMinutes())}m ${pad(now.getSeconds())}s`;
}

// Ticks every second; renders only on the client so the static HTML never shows a stale value
function Lifespan() {
	const [value, setValue] = useState<string | null>(null);

	useEffect(() => {
		const birth = new Date(`${profile.birthDate}T00:00:00`);
		const tick = () => setValue(lifespan(birth, new Date()));
		tick();
		const id = setInterval(tick, 1000);
		return () => clearInterval(id);
	}, []);

	return <span className="font-mono tabular-nums">{value ?? "counting..."}</span>;
}

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
			description: "Turning challenges into working products",
		},
		{
			icon: Sparkles,
			title: "AI-Assisted",
			description: "Using modern AI tools to ship faster",
		},
	];

	const facts = [
		{ icon: Hourglass, label: "Lifespan", value: <Lifespan /> },
		{ icon: MapPin, label: "Location", value: profile.location },
		{ icon: GraduationCap, label: "Education", value: "MCA at Brainware University (2026 - 2028)" },
		{ icon: Briefcase, label: "Currently", value: "Full Stack Developer Intern at Zoraviks Technologies" },
		{ icon: Rocket, label: "Freelance", value: "Building Gendemy for Gentik" },
		{ icon: Languages, label: "Languages", value: profile.languages.join(", ") },
		{ icon: Heart, label: "Interests", value: profile.interests.join(", ") },
	];

	return (
		<section id="about" className="py-20 px-4 relative">
			<div className="container mx-auto max-w-7xl">
				<SectionHeading title="About Me" />

				<div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center mb-16">
					{/* Quick facts */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<div className="bg-linear-to-br from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-1.5">
							<div className="bg-card rounded-xl p-6 space-y-5">
								{facts.map((fact) => (
									<div key={fact.label} className="flex items-start gap-4">
										<div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
											<fact.icon className="w-5 h-5 text-primary" />
										</div>
										<div>
											<p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{fact.label}</p>
											<p className="font-medium">{fact.value}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</motion.div>

					{/* Bio */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="space-y-5"
					>
						<p className="text-lg text-muted-foreground leading-relaxed">
							I'm a <span className="text-primary font-semibold">Full Stack Developer</span> from Ashoknagar, West Bengal. I completed my BCA at Brainware University and I'm now pursuing my MCA there (2026 - 2028).
						</p>
						<p className="text-lg text-muted-foreground leading-relaxed">
							I work as a Full Stack Developer Intern at <span className="text-foreground font-semibold">Zoraviks Technologies</span>, where I build features for their main product <a href="https://fotopick.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">fotopick.in</a> and built the website for their client Orchid Photography. Alongside that, I'm building <a href="https://gendemy.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Gendemy</a> end to end as a freelancer for <span className="text-foreground font-semibold">Gentik</span>.
						</p>
						<p className="text-lg text-muted-foreground leading-relaxed">
							I enjoy turning ideas into fast, reliable products: clean APIs, solid databases and polished interfaces. Away from the keyboard you'll find me playing chess, exploring new AI tools or contributing to open source.
						</p>
						{profile.openToFreelance && (
							<p className="text-lg leading-relaxed font-medium">
								Have a project in mind? I'm <a href="#contact" className="text-primary hover:underline">open to freelance work</a>.
							</p>
						)}
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
							whileHover={{ y: -4 }}
						>
							<Card className="h-full border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur">
								<CardContent>
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
