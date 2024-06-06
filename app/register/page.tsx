"use client"

import Container from '@/components/Container';
import { Formik } from 'formik';
import Link from "next/link";
import * as Yup from 'yup';
import { ButtonStyles, InputStyles } from '../styles';
import { useState } from 'react';


interface FormikValidation {
    fullName: string,
    email: string,
    password: string,
}

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(name)

    return (<>
        <Container className='flex items-center justify-center h-screen'>
            <div className="card shrink-0 w-full max-w-[25rem] shadow-2xl bg-base-100">
                <Formik
                    initialValues={{ fullName: '', email: '', password: ""}}
                    validationSchema={
                        Yup.object({
                            fullName: Yup.string().matches(/^[a-z A-Z]+$/, "Must be only alphabets").max(50, 'Name too long, use Nickname').required('Name is required').min(2, 'Name too short, include last name too'),
                            email: Yup.string().email('Invalid email address').required('Required'),
                            password: Yup.string().min(8, 'Must be 8 words or more').required('Required'),
                        })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {formik => (<>
                        <h1 className="text-center font-semibold mt-10 text-large text-neutral-600">Register</h1>
                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <div className="form-control flex flex-col gap-2">
                                {/* Full Name */}
                                <div>
                                    <span className="label-text">Full Name</span>
                                    <input id="fullName"
                                        placeholder="Full Name"
                                        {...formik.getFieldProps('fullName')} 
                                        className={`${InputStyles.input} `}
                                        required />
                                    {formik.touched.fullName && formik.errors.fullName ? (
                                        <div className={`${InputStyles.errorMessage}`}>{formik.errors.fullName}</div>
                                    ) : null}
                                </div>

                                {/* Email*/}
                                <div>
                                    <span className="label-text">Email</span>
                                    <input id="email"
                                        {...formik.getFieldProps('email')} type="email" placeholder="Enter email" className={`${InputStyles.input} w-full`}
                                        required />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className={`${InputStyles.errorMessage}`}>{formik.errors.email}</div>
                                    ) : null}
                                </div>

                                {/* Password */}
                                <div>
                                    <span className="label-text ">Password</span>
                                    <input id="password" {...formik.getFieldProps('password')} type="password" placeholder="Enter password" className={`${InputStyles.input} w-full`}
                                    required />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className={`${InputStyles.errorMessage}`} >{formik.errors.password}</div>
                                    ) : null}
                                </div>

                                <button type="submit" className={`${ButtonStyles.primaryButton} mt-3 w-full mx-auto`} >Register</button>

                                <p className="text-[12px] text-center mt-1">Already have an account? <Link href="/login" className="text-blue-100 font-bold">Login</Link></p>
                            </div>
                        </form>
                    </>
                    )}
                </Formik>
            </div>
        </Container>
    </>
    )
}

export default Register