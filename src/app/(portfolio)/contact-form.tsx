'use client';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, Loader2 } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from "sonner";
import { z } from 'zod';

const formSchema = z.object({
	name: z.string().min(3, { message: 'Name must be at least 3 characters.' }),
	email: z
		.string()
		.min(3, { message: 'Email must be at least 3 characters.' })
		.email({ message: 'Please enter a valid email.' }),
	subject: z.string().min(3, { message: 'Subject must be at least 3 characters.' }),
	message: z.string().min(3, { message: 'Message must be at least 3 characters.' }),
});

const ContactForm = () => {
	const [loading, setLoading] = React.useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		mode: 'onChange',
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		if (!isValid) {
			toast.error('Please fill in all fields correctly.');
			return;
		}

		setLoading(true);

		const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string | undefined;
		const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string | undefined;
		const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string | undefined;
		const options = { publicKey };

		if (!serviceID || !templateID || !publicKey) {
			toast.error('Email service is not configured properly.');
			setLoading(false);
			return;
		}

		try {
			const formData = new FormData();
			formData.append('name', values.name);
			formData.append('email', values.email);
			formData.append('subject', values.subject);
			formData.append('message', values.message);

			const resposne = await fetch('/api/message', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: formData,
			})

			if (!resposne.ok) {
				const errorData = await resposne.json();
				toast.error(errorData.error || 'Failed to send message.');
				setLoading(false);
				return;
			}
			const mail = await emailjs.send(serviceID, templateID, values, options);

			if (mail.status === 200) {
				toast.success('Message sent successfully!');
			}
		} catch (error) {
			let errorMessage = 'An error occurred. Please try again.';
			if (typeof error === 'object' && error !== null) {
				if ('text' in error && typeof (error as any).text === 'string') {
					errorMessage = (error as any).text;
				} else if ('message' in error && typeof (error as any).message === 'string') {
					errorMessage = (error as any).message;
				}
			}
			toast.error(errorMessage);
		} finally {
			reset();
			setLoading(false);
		}
	};

	return (
		<form className="flex flex-col gap-5 justify-between items-center w-full h-full" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex gap-4 items-center justify-between w-full">
				<div className="flex flex-col w-full">
					<Input
						type="text"
						placeholder="Your Name"
						className='dark:bg-bg-dark'
						{...register('name')}
					/>
					{errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
				</div>
				<div className="flex flex-col w-full">
					<Input
						type="text"
						placeholder="@gmail.com"
						className='dark:bg-bg-dark'
						{...register('email')}
					/>
					{errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
				</div>
			</div>
			<div className="flex flex-col w-full">
				<Input
					type="text"
					placeholder="Subject"
					className='dark:bg-bg-dark'
					{...register('subject')}
				/>
				{errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
			</div>
			<div className="flex flex-col w-full">
				<Textarea
					placeholder="Enter your message"
					className='dark:bg-bg-dark'
					rows={6}
					{...register('message')}
				/>
				{errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
			</div>
			{
				loading ? <Button disabled className="w-full bg-primary">
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
					Please wait
				</Button> : <Button type="submit" className="w-full cursor-pointer bg-primary hover:bg-primary-hover group">
					<span>Send</span>
					<ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 -mt-0.5" />
				</Button>
			}
		</form>
	);
};

export default ContactForm;
