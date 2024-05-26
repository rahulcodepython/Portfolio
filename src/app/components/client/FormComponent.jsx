"use client"
import { Formik, Form } from 'formik'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import { toast } from "sonner"
import emailjs from '@emailjs/browser';

const FormComponent = () => {
    const [loading, setLoading] = React.useState(false)

    return (
        <Formik initialValues={{
            name: '',
            email: '',
            subject: '',
            message: ''
        }} onSubmit={async (values, actions) => {
            setLoading(true)

            const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

            try {
                const res = await emailjs.send(serviceID, templateID, values, options);

                if (res.status === 200) {
                    toast.success('Message sent successfully!');
                    actions.resetForm();
                };
            } catch (error) {
                toast.error(error?.text || error);
                actions.resetForm();
            } finally {
                setLoading(false)
            }
        }}>
            {
                ({ values, handleChange, handleSubmit }) => {
                    return <Form className='flex flex-col gap-5 justify-center items-center px-4 lg:px-10 w-full' onSubmit={e => e.preventDefault()}>
                        <div className='flex gap-4 items-center justify-center w-full'>
                            <Input type='text' name='name' placeholder='Your Name' required values={values.name} onChange={e => handleChange(e)} />
                            <Input type='text' name='email' placeholder='@gmail.com' required values={values.email} onChange={e => handleChange(e)} />
                        </div>
                        <Input type='text' name='subject' placeholder='Subject' required values={values.subject} onChange={e => handleChange(e)} />
                        <Textarea required placeholder={'Enter your message'} name="message" rows={6} values={values.message} onChange={e => handleChange(e)} >
                        </Textarea>
                        {
                            loading ? <Button disabled className="w-full">
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </Button> : <Button className="w-full" onClick={handleSubmit}>
                                <span>Send</span>
                            </Button>
                        }
                    </Form>
                }
            }
        </Formik>
    )
}

export default FormComponent