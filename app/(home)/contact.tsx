"use client";

import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/lib/data";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		setError,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const onSubmit = async (data: ContactFormData) => {
		// Honeypot: real users never fill this hidden field
		const website = (document.getElementById("website") as HTMLInputElement | null)?.value ?? "";

		try {
			// Handled by the Cloudflare Pages Function in functions/api/contact.ts
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...data, website }),
			});

			const responseData = await response.json().catch(() => ({}));

			if (response.ok) {
				toast.success("Message sent successfully! I'll get back to you soon.", {
					description: "Thank you for reaching out!",
				});
				reset();
			} else if (responseData.errors) {
				Object.entries(responseData.errors).forEach(([field, message]) => {
					setError(field as keyof ContactFormData, {
						type: "server",
						message: message as string,
					});
				});
				toast.error("Please fix the errors in the form");
			} else {
				toast.error("Failed to send message", {
					description: responseData.message || `Please try again later or email ${profile.email}.`,
				});
			}
		} catch (error) {
			console.error("Contact form error:", error);
			toast.error("Something went wrong", {
				description: `Please try again later or email ${profile.email}.`,
			});
		}
	};

	const contactInfo = [
		{
			icon: Mail,
			title: "Email",
			value: profile.email,
			href: `mailto:${profile.email}`,
		},
		{
			icon: Phone,
			title: "Phone",
			value: profile.phone,
			href: `tel:${profile.phone.replace(/\s/g, "")}`,
		},
		{
			icon: MapPin,
			title: "Location",
			value: profile.location,
			href: null,
		},
	];

	return (
		<section id="contact" className="py-20 px-4">
			<div className="container mx-auto max-w-7xl">
				<SectionHeading
					title="Get In Touch"
					subtitle="Have a project in mind or just want to chat? Send me a message and I'll reply by email."
				/>

				<div className="grid lg:grid-cols-5 gap-8">
					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="lg:col-span-2 space-y-4"
					>
						{contactInfo.map((info) => (
							<Card key={info.title} className="border-primary/20 hover:border-primary/50 transition-all duration-300 bg-card py-5">
								<CardContent>
									<div className="flex items-center gap-4">
										<div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
											<info.icon className="w-5 h-5 text-primary" />
										</div>
										<div className="flex-1 min-w-0">
											<h3 className="font-semibold mb-0.5">{info.title}</h3>
											{info.href ? (
												<a
													href={info.href}
													className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
												>
													{info.value}
												</a>
											) : (
												<p className="text-sm text-muted-foreground">{info.value}</p>
											)}
										</div>
									</div>
								</CardContent>
							</Card>
						))}

						{profile.openToFreelance && (
							<Card className="border-green-500/30 bg-linear-to-br from-green-500/10 via-primary/5 to-purple-500/10">
								<CardContent className="space-y-2">
									<div className="flex items-center gap-2 font-semibold">
										<span className="relative flex h-2.5 w-2.5">
											<span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
											<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
										</span>
										Available for freelance work
									</div>
									<p className="text-sm text-muted-foreground">
										Websites, web apps, dashboards and APIs. Share a short brief and your timeline, and I'll get back with next steps.
									</p>
								</CardContent>
							</Card>
						)}
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="lg:col-span-3"
					>
						<Card className="border-primary/20 bg-card h-full">
							<CardContent className="h-full">
								<form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col justify-between gap-6 h-full">
									{/* Honeypot field, hidden from people and screen readers */}
									<div className="hidden" aria-hidden="true">
										<label htmlFor="website">Website</label>
										<input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
									</div>

									<div className="grid sm:grid-cols-2 gap-6">
										<div className="space-y-2">
											<Label htmlFor="name">Name</Label>
											<Input
												id="name"
												placeholder="John Doe"
												autoComplete="name"
												aria-invalid={!!errors.name}
												{...register("name")}
											/>
											{errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
										</div>

										<div className="space-y-2">
											<Label htmlFor="email">Email</Label>
											<Input
												id="email"
												type="email"
												placeholder="john@example.com"
												autoComplete="email"
												aria-invalid={!!errors.email}
												{...register("email")}
											/>
											{errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
										</div>
									</div>

									<div className="space-y-2 flex-1 flex flex-col">
										<Label htmlFor="message">Message</Label>
										<Textarea
											id="message"
											placeholder="Tell me about your project..."
											aria-invalid={!!errors.message}
											{...register("message")}
											className="flex-1 min-h-40 resize-none"
										/>
										{errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
									</div>

									<Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
										{isSubmitting ? (
											<>
												<Loader2 className="w-4 h-4 animate-spin" />
												Sending...
											</>
										) : (
											<>
												<Send className="w-4 h-4" />
												Send Message
											</>
										)}
									</Button>
								</form>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
