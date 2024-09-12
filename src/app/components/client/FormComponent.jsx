'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import { toast } from "sonner"
import emailjs from '@emailjs/browser';
import React from 'react';


const formSchema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters.' }),
    email: z
        .string()
        .min(3, { message: 'Email must be at least 3 characters.' })
        .email({ message: 'Please enter a valid email.' }),
    subject: z.string().min(3, { message: 'Subject must be at least 3 characters.' }),
    message: z.string().min(3, { message: 'Message must be at least 3 characters.' }),
});

const FormComponent = () => {
    const [loading, setLoading] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
    });

    const onSubmit = async (values) => {
        setLoading(true);

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

        try {
            const res = await emailjs.send(serviceID, templateID, values, options);

            if (res.status === 200) {
                toast.success('Message sent successfully!');
                reset();
            }
        } catch (error) {
            console.log(error);

            toast.error(error?.text || error.message || 'An error occurred. Please try again.');
            reset();
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            className="flex flex-col gap-5 justify-center items-center px-4 lg:px-10 w-full"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex gap-4 items-center justify-between w-full">
                <div className="flex flex-col w-full">
                    <Input
                        type="text"
                        placeholder="Your Name"
                        {...register('name')}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div className="flex flex-col w-full">
                    <Input
                        type="text"
                        placeholder="@gmail.com"
                        {...register('email')}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
            </div>
            <div className="flex flex-col w-full">
                <Input
                    type="text"
                    placeholder="Subject"
                    {...register('subject')}
                />
                {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
            </div>
            <div className="flex flex-col w-full">
                <Textarea
                    placeholder="Enter your message"
                    rows={6}
                    {...register('message')}
                />
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>

            {
                loading ? <Button disabled className="w-full">
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                </Button> : <Button type="submit" className="w-full" disabled={!isValid}>
                    <span>Send</span>
                </Button>
            }
        </form>
    );
};

export default FormComponent;
