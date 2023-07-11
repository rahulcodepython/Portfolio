"use client"
import React from 'react'
import { Formik, Field, Form } from 'formik';

const FormComponent = ({ type }) => {
    return (
        <Formik initialValues={{
            name: '',
            email: '',
            subject: '',
            message: ''
        }} onSubmit={async (values) => {
            console.log(values);
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