"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactCreateSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

type ContactFormData = z.infer<typeof contactCreateSchema>;

export default function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		setError,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactCreateSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const onSubmit = async (data: ContactFormData) => {
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			const responseData = await response.json();

			if (response.ok) {
				toast.success("Message sent successfully! I'll get back to you soon.", {
					description: "Thank you for reaching out!",
				});
				reset();
			} else {
				// Handle validation errors from server (backup)
				if (responseData.errors) {
					// Set field-level errors from server
					Object.entries(responseData.errors).forEach(([field, message]) => {
						setError(field as keyof ContactFormData, {
							type: "server",
							message: message as string,
						});
					});
					toast.error("Please fix the errors in the form");
				} else {
					toast.error("Failed to send message", {
						description: responseData.message || "Please try again later.",
					});
				}
			}
		} catch (error) {
			console.error('Contact form error:', error);
			toast.error("Something went wrong", {
				description: "Please try again later.",
			});
		}
	};

	const contactInfo = [
		{
			icon: Mail,
			title: "Email",
			value: "rahulcodepython@gmail.com",
			href: "mailto:contact@rahulcodepython.space",
		},
		{
			icon: MapPin,
			title: "Location",
			value: "India",
			href: null,
		},
		{
			icon: Phone,
			title: "Phone",
			value: "+91 9775150082",
			href: "tel:+919775150082",
		},
	];

	return (
		<section id="contact" className="py-20 px-4">
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
						Get In Touch
						<span className="text-primary font-mono">{" />"}</span>
					</h2>
					<div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
					<p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
						Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new projects and opportunities.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-5 gap-8">
					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="lg:col-span-2 space-y-6"
					>
						{contactInfo.map((info, index) => (
							<motion.div
								key={info.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 bg-card">
									<CardContent className="">
										<div className="flex items-start gap-4">
											<div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
												<info.icon className="w-5 h-5 text-primary" />
											</div>
											<div className="flex-1">
												<h3 className="font-semibold mb-1">{info.title}</h3>
												{info.href ? (
													<a
														href={info.href}
														className="text-sm text-muted-foreground hover:text-primary transition-colors"
													>
														{info.value}
													</a>
												) : (
													<p className="text-sm text-muted-foreground">
														{info.value}
													</p>
												)}
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							viewport={{ once: true }}
						>
							<Card className="border-primary/20 bg-linear-to-br from-primary/10 via-purple-500/10 to-primary/10">
								<CardContent className="">
									<div className="text-center space-y-2">
										<p className="text-sm text-muted-foreground font-mono">
											<span className="text-purple-500">//</span> Available for freelance work
										</p>
										<p className="text-sm text-muted-foreground font-mono">
											<span className="text-green-500">const</span> status ={" "}
											<span className="text-green-500">"open to opportunities"</span>;
										</p>
									</div>
								</CardContent>
							</Card>
						</motion.div>
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
								<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between space-y-6 h-full">
									<div className="space-y-2">
										<Label htmlFor="name" className="font-mono">
											Name
										</Label>
										<Input
											id="name"
											placeholder="John Doe"
											{...register("name")}
											className={`font-mono ${errors.name ? 'border-destructive' : ''}`}
										/>
										{errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
									</div>

									<div className="space-y-2">
										<Label htmlFor="email" className="font-mono">
											Email
										</Label>
										<Input
											id="email"
											type="email"
											placeholder="john@example.com"
											{...register("email")}
											className={`font-mono ${errors.email ? 'border-destructive' : ''}`}
										/>
										{errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
									</div>

									<div className="space-y-2 flex-1 flex flex-col">
										<Label htmlFor="message" className="font-mono">
											Message
										</Label>
										<Textarea
											id="message"
											placeholder="Tell me about your project..."
											{...register("message")}
											className={`flex-1 font-mono resize-none ${errors.message ? 'border-destructive' : ''}`}
										/>
										{errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
									</div>

									<Button
										type="submit"
										size="lg"
										className="w-full font-mono"
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											<>
												<div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
												Sending...
											</>
										) : (
											<>
												<Send className="w-4 h-4 mr-2" />
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
