"use client"
import { usePathname } from 'next/navigation'
import { Formik, Field, Form } from 'formik'
import { toast } from 'react-toastify';
import React from 'react'
import axios from 'axios'

const FormComponent = ({ type }) => {
    const pathname = usePathname()
    const [pricing, setPricing] = React.useState("")

    React.useEffect(() => {
        setPricing(() => {
            if (pathname === '/freelance/project/basic') {
                return 'basic'
            }
            else if (pathname === '/freelance/project/intermediate') {
                return 'intermediate'
            }
            else if (pathname === '/freelance/project/advance') {
                return 'advance'
            }
        })
    }, [pathname])

    const showToast = (message, status) => {
        if (status === 200) {
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT,
                className: 'toast-message'
            });
        }
        else {
            toast.error(message, {
                position: toast.POSITION.TOP_RIGHT,
                className: 'toast-message'
            });
        }
    };

    const ContactForm = async (values, resetForm) => {
        const body = JSON.stringify({
            "name": `${values.name}`,
            "email": `${values.email}`,
            "subject": `${values.subject}`,
            "message": `${values.message}`
        });

        const options = {
            url: `${process.env.DOMAIN_NAME}api/contact`,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: body,
        }

        const response = await axios.request(options);

        if (response.status === 200) {
            showToast(response.data.msg, response.status)
            resetForm({ values: '' })
        }
        else {
            showToast(response.data.msg, response.status)
        }
    }

    const FreelanceForm = async (values, resetForm) => {
        const body = JSON.stringify({
            "name": `${values.name}`,
            "email": `${values.email}`,
            "pricing": `${pricing}`,
            "subject": `${values.subject}`,
            "message": `${values.message}`
        });

        const options = {
            url: `${process.env.DOMAIN_NAME}api/freelance`,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: body,
        }

        const response = await axios.request(options);

        if (response.status === 200) {
            showToast(response.data.msg, response.status)
            resetForm({ values: '' })
        }
        else {
            showToast(response.data.msg, response.status)
        }
    }

    return (
        <Formik initialValues={{
            name: '',
            email: '',
            subject: '',
            message: ''
        }} onSubmit={
            async (values, { resetForm }) => {
                type === 'contactus' ? await ContactForm(values, resetForm) : type === 'freelance' ? await FreelanceForm(values, resetForm) : null
            }}>
            <Form className='flex flex-col gap-5 justify-center items-center px-0 lg:px-10 w-full'>
                <div className='flex gap-4 items-center justify-center w-full'>
                    <Field type='text' name='name' placeholder='Your Name' required className='focus:outline-primary focus:ring-0 border border-slate-300 rounded-sm h-10 py-1 px-3 text-sm placeholder:text-primary placeholder:text-sm w-1/2' />
                    <Field type='email' name='email' placeholder='@gmail.com' required className='focus:outline-primary focus:ring-0 border border-slate-300 rounded-sm h-10 py-1 px-3 text-sm placeholder:text-primary placeholder:text-sm w-1/2' />
                </div>
                <Field type='text' name='subject' placeholder='Subject' required className='focus:outline-primary focus:ring-0 border border-slate-300 rounded-sm w-full p-3 text-sm placeholder:text-primary placeholder:text-sm' />
                <Field name='message'>
                    {({ field }) => (
                        <textarea {...field} required placeholder={
                            type === 'contactus' ? 'Enter your message' :
                                type === 'freelance' ? "Give me a breif description of your project" :
                                    null
                        } rows={6} className='focus:outline-primary focus:ring-0 border border-slate-300 rounded-sm w-full h-full py-3 px-5 text-sm placeholder:text-primary placeholder:text-sm'>
                        </textarea>
                    )}
                </Field>
                <button className='send-button px-12 py-2' type='submit'>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Send</span>
                </button>
            </Form>
        </Formik>
    )
}

export default FormComponent