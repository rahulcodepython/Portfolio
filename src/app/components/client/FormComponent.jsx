"use client"
import { Formik, Form } from 'formik'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import axios from 'axios'
import { toast } from "sonner"

const FormComponent = () => {
    const [loading, setLoading] = React.useState(false)

    return (
        <Formik initialValues={{
            name: '',
            email: '',
            subject: '',
            message: ''
        }} onSubmit={async (values) => {
            setLoading(pre => true)

            const options = {
                url: `${process.env.DOMAIN_NAME}api/contact/`,
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data: values
            }
            await axios.request(options)
                .then((response) => {
                    toast(`${response.data.msg}`)
                })
                .catch((error) => {
                    toast("Something went wrong!")
                })
                .finally(() => {
                    values.name = '';
                    values.email = '';
                    values.subject = '';
                    values.message = '';
                    setLoading(pre => false);
                });
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