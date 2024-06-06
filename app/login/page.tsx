"use client"
import Container from '@/components/Container';
import { Formik } from 'formik';
import Link from "next/link";
import * as Yup from 'yup';
import { ButtonStyles, InputStyles } from '../styles';


const Login = () => {
    return (<>

        <Container className='flex items-center justify-center h-screen'>
            <div className="card shrink-0 w-full max-w-[25rem] shadow-2xl bg-base-100">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Invalid email address')
                            .required('Required'),
                        password: Yup.string().min(8, 'Must be 8 words or more').required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values));
                            setSubmitting(false);
                        }, 400);
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

                                <button type="submit" className={`${ButtonStyles.primaryButton} mt-3`} >Login</button>

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