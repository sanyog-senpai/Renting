"use client"
import Container from '@/components/Container';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { ButtonStyles, InputStyles } from '../styles';
import { productCondition, productStatus } from '@/utils/product.utils';

const Login = () => {

   const [localURL, setLocalURL] = useState(null);
   const [productImage, setProductImage] = useState(null);

   return (<>

      <Container className='flex items-center justify-center h-screen'>
         <div className="card shrink-0 w-full max-w-[30rem] shadow-2xl bg-base-100">
            <Formik
               initialValues={{ image: "", title: "", price: "", description: "", condition: "", status: "" }}
               validationSchema={
                  Yup.object({
                     title: Yup.string()
                        .min(2, "Name must be at least 2 letter")
                        .max(55, "Name must be less than 55 characters")
                        .trim()
                        .required("Title is Required"),
                     price: Yup.number().min(0, "Price cannot be less than or equal to 0").required("Specify Price"),
                     description: Yup.string()
                        .min(200, "Must be at least 200 characters")
                        .max(1000, "Must be less than 1000 characters")
                        .required("Description is required"),
                     condition: Yup.string(),
                     status: Yup.string()
                  })}
               onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                     alert(JSON.stringify(values));
                     setSubmitting(false);
                  }, 400);
               }}
            >
               {formik => (<>
                  <h1 className="text-center font-semibold mt-10 text-large text-neutral-600">Post a Renting Ad</h1>
                  <form onSubmit={formik.handleSubmit} className="card-body">
                     <div className="form-control flex flex-col gap-2">
                        {/* Title and Price */}
                        <div className="flex justify-between gap-5">

                           <div>
                              <span className="label-text">Title</span>
                              <input id="title"
                                 {...formik.getFieldProps('title')} type="text" placeholder="Enter Product title" className={`${InputStyles.input}`} required />
                              {formik.touched.title && formik.errors.title ? (
                                 <div className={`${InputStyles.errorMessage}`}>{formik.errors.title}</div>
                              ) : null}
                           </div>

                           <div>
                              <span className="label-text ">Price</span>
                              <input id="price" {...formik.getFieldProps('price')} type="number" placeholder="Enter Price" className={`${InputStyles.input}`} required />
                              {formik.touched.price && formik.errors.price ? (
                                 <div className={`${InputStyles.errorMessage}`}>{formik.errors.price}</div>
                              ) : null}
                           </div>
                        </div>


                        {/* Description */}
                        <div>
                           <span className="label-text ">Description</span>
                           <textarea id="description" {...formik.getFieldProps('password')} placeholder="Product so Good :)" className={`${InputStyles.input} p-3`} required />
                           {formik.touched.price && formik.errors.price ? (
                              <div className={`${InputStyles.errorMessage}`}>{formik.errors.price}</div>
                           ) : null}
                        </div>

                        {/* Condition and Status */}
                        <div className="flex justify-between gap-5">
                           <div>
                              <span className="label-text ">Category</span>
                              <select id="countries" className={`${InputStyles.input}`}>
                                 <option selected  >Category...</option>
                                 {productCondition?.map((item, index) => {
                                    return (
                                       <option value={item} key={index} >{item}</option>
                                    )
                                 })}
                              </select>
                           </div>
                           <div>
                              <span className="label-text ">Status</span>
                              <select id="countries" className={`${InputStyles.input}`}>
                                 <option selected  >Status ...</option>
                                 {productStatus?.map((item, index) => {
                                    return (
                                       <option value={item} key={index} >{item}</option>
                                    )
                                 })}
                              </select>
                           </div>
                        </div>


                        <div>
                           <span className="label-text mt-2">Image</span>
                           <div>

                              <input type="file" className="file-input w-full h-10 bg-slate-300" accept='image/*' multiple placeholder='Upload Image' style={{borderRadius: "5rem"}}/>
                           </div>
                        </div>


                        <button type="submit" className={`${ButtonStyles.utilityButton} mt-3`} >Submit</button>
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