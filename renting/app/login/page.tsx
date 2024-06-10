"use client"

import Container from '@/components/Container';
import { Formik } from 'formik';
import Link from "next/link";
import * as Yup from 'yup';
import { ButtonStyles, InputStyles } from '../styles';
import { signIn } from 'next-auth/react';
import { setDefaultResultOrder } from 'dns';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Toast from '@/components/Toast';
import { RiCollageFill } from 'react-icons/ri';

interface SignInResponse {
    error?: string;
    status: number;
    ok: boolean;
    url?: string | null;
}

const Login = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    return (
        <>
            <Container className='flex items-center justify-center h-screen'>
                {error && (
                    <Toast message={error} type='error' />
                )}
                {success && (
                    <Toast message={success} type='success' />
                )}
                <div className="card shrink-0 w-full max-w-[25rem] shadow-2xl bg-base-100">
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={Yup.object({
                            email: Yup.string().email('Invalid email address').lowercase()
                                .required('Required'),
                            password: Yup.string().min(8, 'Must be 8 words or more').required('Required'),
                        })}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                            setLoading(true)

                            try {
                                const res = await fetch("api/user/login", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(values)
                                })
                                const data = await res.json();
                                console.log(data)

                                if (data.isLoggedIn) {
                                    setSuccess(data.message)
                                    resetForm()
                                    localStorage.setItem('isLoggedIn', "true");
                                    localStorage.setItem("role", data.role);

                                    router.push('/')
                                } else {
                                    setError(data.message)
                                }
                                
                            } catch (error) {
                                console.log(error)
                            } finally {
                                setLoading(false)
                            }

                        }}
                    >
                        {formik => (<>
                            <h1 className="text-center font-semibold mt-10 text-large text-neutral-600">Login</h1>
                            <form onSubmit={formik.handleSubmit} className="card-body">
                                <div className="form-control flex flex-col gap-2">
                                    <div>
                                        <span className="label-text">Email</span>
                                        <input id="email"
                                            {...formik.getFieldProps('email')} type="email" placeholder="Enter email or username" className={`${InputStyles.input}`} required />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className={`${InputStyles.errorMessage}`}>{formik.errors.email}</div>
                                        ) : null}
                                    </div>

                                    <div>
                                        <span className="label-text ">Password</span>
                                        <input id="password" {...formik.getFieldProps('password')} type="password" placeholder="Enter password" className={`${InputStyles.input}`} required />
                                        {formik.touched.password && formik.errors.password ? (
                                            <div className={`${InputStyles.errorMessage}`}>{formik.errors.password}</div>
                                        ) : null}
                                    </div>

                                    <button type="submit" className={`mt-3 w-full mx-auto ${loading ? `${ButtonStyles.primaryButton} " bg-slate-400 hover:bg-slate-600 text-slate-900"` : ButtonStyles.primaryButton}`} disabled={loading}
                                >{loading ? "Logging In..." : "Login"}</button>

                                    <p className="text-[12px] text-center mt-1">Don&apos;t have an account?
                                        <Link href="/register" className="text-blue-100 font-bold"> Create an account</Link></p>
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

export default Login