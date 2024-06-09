"use client"

import Container from '@/components/Container';
import { Formik } from 'formik';
import Link from "next/link";
import * as Yup from 'yup';
import { ButtonStyles, InputStyles } from '../styles';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Toast from '@/components/Toast';


const Register = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false)

    return (<>
        <Container className='flex items-center justify-center h-screen'>
            {error && (
                <Toast message={error} type='error' />
            )}
            {success && (
                <Toast message={success} type='success' />
            )}
            <div className="card shrink-0 w-full max-w-[25rem] shadow-2xl bg-base-100">
                <Formik
                    initialValues={{ fullName: '', email: '', password: "" }}
                    validationSchema={
                        Yup.object({
                            fullName: Yup.string().matches(/^[a-z A-Z]+$/, "Must be only alphabets").max(50, 'Name too long, use Nickname').required('Name is required').min(2, 'Name too short, include last name too'),
                            email: Yup.string().email('Invalid email address').lowercase().required('Required'),
                            password: Yup.string().min(8, 'Must be 8 words or more').required('Required'),
                        })}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        setLoading(true)
                        try {
                            const res = await fetch("api/user/register", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(values)
                            })

                            const data = await res.json()
                            console.log(data)

                            if (res.ok) {
                                setSuccess(data.message)
                                resetForm()
                                setTimeout(() => {
                                    router.push('/login');
                                }, 2000);
                            } else {
                                // console.log("Res",res)
                                setError(data.message)
                            }

                        } catch (error) {
                            console.log("Error during registration", error);
                        } finally {
                            setSubmitting(false);
                            setLoading(false)
                        }
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

                                <button type="submit" className={`mt-3 w-full mx-auto ${loading ? `${ButtonStyles.primaryButton} " bg-slate-400 hover:bg-slate-600 text-slate-900"` : ButtonStyles.primaryButton}`} disabled={loading}
                                >{loading ? "Registering..." : "Register"}</button>

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