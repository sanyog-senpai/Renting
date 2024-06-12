"use client"
import AuthGuard from '@/components/AuthGuard';
import Container from '@/components/Container';
import Toast from '@/components/Toast';
import { productCondition, productStatus } from '@/utils/product.utils';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as Yup from 'yup';
import { ButtonStyles, InputStyles } from '../styles';

const Login = () => {
   const [success, setSuccess] = useState("");
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

   const router = useRouter();

   return (
      <>
         {/* <AuthGuard> */}
         <Container className='flex items-center justify-center h-screen'>
            {error && <Toast message={error} type='error' />}
            {success && <Toast message={success} type='success' />}
            <div className="card shrink-0 w-full max-w-[30rem] shadow-2xl bg-base-100">
               <Formik
                  initialValues={{ image: "", title: "", price: "", description: "", condition: "", status: "" }}
                  validationSchema={
                     Yup.object({
                        image: Yup.string(),
                        title: Yup.string()
                           .min(2, "Name must be at least 2 letter")
                           .max(55, "Name must be less than 55 characters")
                           .trim()
                           .required("Title is Required"),
                        price: Yup.number().min(0, "Price cannot be less than or equal to 0").required("Specify Price"),
                        description: Yup.string()
                           .min(100, "Must be at least 100 characters")
                           .max(1000, "Must be less than 1000 characters")
                           .required("Description is required"),
                        condition: Yup.string().oneOf(productCondition, "Invalid condition"),
                        status: Yup.string().oneOf(productStatus, "Invalid status")
                     })}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                     setLoading(true);

                     try {
                        const res = await fetch("http://localhost:3001/product/create", {
                           method: "POST",
                           headers: {
                              "Content-Type": "application/json"
                           },
                           body: JSON.stringify(values)
                        });

                        const data = await res.json();
                        console.log(data)

                        if (res.ok) {
                           setSuccess(data.message);
                           resetForm();
                           setTimeout(() => {
                              router.push('/dashboard');
                           }, 2000);
                        } else {
                           setError(data.message);
                        }
                     } catch (error) {
                        console.error("Error while posting product:", error);
                        setError("An unexpected error occurred. Please try again.");
                     } finally {
                        setSubmitting(false);
                        setLoading(false);
                     }
                  }}
               >
                  {formik => (
                     <>
                        <h1 className="text-center font-semibold mt-10 text-large text-neutral-600">Post a Renting Ad</h1>
                        <form onSubmit={formik.handleSubmit} className="card-body">
                           <div className="form-control flex flex-col gap-2">
                              {/* Title and Price */}
                              <div className="flex justify-between gap-5">
                                 <div>
                                    <span className="label-text">Title</span>
                                    <input
                                       id="title"
                                       {...formik.getFieldProps('title')}
                                       type="text"
                                       placeholder="Enter Product title"
                                       className={`${InputStyles.input}`}
                                       required
                                    />
                                    {formik.touched.title && formik.errors.title ? (
                                       <div className={`${InputStyles.errorMessage}`}>{formik.errors.title}</div>
                                    ) : null}
                                 </div>

                                 <div>
                                    <span className="label-text ">Price</span>
                                    <input
                                       id="price"
                                       {...formik.getFieldProps('price')}
                                       type="number"
                                       placeholder="Enter Price"
                                       className={`${InputStyles.input}`}
                                       required
                                    />
                                    {formik.touched.price && formik.errors.price ? (
                                       <div className={`${InputStyles.errorMessage}`}>{formik.errors.price}</div>
                                    ) : null}
                                 </div>
                              </div>

                              {/* Description */}
                              <div>
                                 <span className="label-text ">Description</span>
                                 <textarea
                                    id="description"
                                    {...formik.getFieldProps('description')}
                                    placeholder="Product so Good :)"
                                    className={`${InputStyles.input} p-3 h-24`}
                                    required
                                 />
                                 {formik.touched.description && formik.errors.description ? (
                                    <div className={`${InputStyles.errorMessage}`}>{formik.errors.description}</div>
                                 ) : null}
                              </div>

                              {/* Condition and Status */}
                              <div className="flex justify-between gap-5">
                                 <div>
                                    <span className="label-text ">Category</span>
                                    <select
                                       id="condition"
                                       {...formik.getFieldProps('condition')}
                                       className={`${InputStyles.input} first:text-red-700`}
                                       required
                                    >
                                       <option value="" label="Select condition" />
                                       {productCondition?.map((item, index) => (
                                          <option value={item} key={index} >{item}</option>
                                       ))}
                                    </select>
                                    {formik.touched.condition && formik.errors.condition ? (
                                       <div className={`${InputStyles.errorMessage}`}>{formik.errors.condition}</div>
                                    ) : null}
                                 </div>
                                 <div>
                                    <span className="label-text ">Status</span>
                                    <select
                                       id="status"
                                       {...formik.getFieldProps('status')}
                                       className={`${InputStyles.input}`}
                                       required
                                    >
                                       <option value="" label="Select status" />
                                       {productStatus?.map((item, index) => (
                                          <option value={item} key={index} >{item}</option>
                                       ))}
                                    </select>
                                    {formik.touched.status && formik.errors.status ? (
                                       <div className={`${InputStyles.errorMessage}`}>{formik.errors.status}</div>
                                    ) : null}
                                 </div>
                              </div>

                              <div>
                                 <span className="label-text mt-2">Image</span>
                                 <div>
                                    <input
                                       type="file"
                                       className="file-input w-full h-10 bg-slate-300"
                                       accept='image/*'
                                       multiple
                                       placeholder='Upload Image'
                                       style={{ borderRadius: "5rem" }}
                                    />
                                 </div>
                              </div>

                              <button type="submit" className={`mt-3 w-full mx-auto ${loading ? `${ButtonStyles.primaryButton} " bg-slate-400 hover:bg-slate-600 text-slate-900"` : ButtonStyles.primaryButton}`} disabled={loading}
                              >{loading ? "Submitting..." : "Submit"}</button>
                           </div>
                        </form>
                     </>
                  )}
               </Formik>
            </div>
         </Container>
         {/* </AuthGuard> */}
      </>
   );
};

export default Login;
