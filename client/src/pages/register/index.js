import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, message } from 'antd';
 import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';

const Register = () => {
  const router = useRouter()
  const [msg, contextHolder] = message.useMessage();  
    const SignupSchema = Yup.object().shape({
      fullName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        password: Yup.string()
        .min(5, 'Password Too Short!')
        .required('Required'),
        confirmPassword: Yup.string()
        .min(5, 'Password Too Short!')
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        phoneNumber: Yup.string()
        .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      });


      const handleRegister = async(values) => {
        const {confirmPassword, ...formFields }= values
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formFields)
      };
      const res = await fetch('http://localhost:4000/register',requestOptions)
       const data = await res.json()
       if(data){
        router.push('/')
        setTimeout(() => {
          msg.info(data.msg);
        }, 2000);

       }  
      }

    return(
        <div>
        <Header/>
        {contextHolder}
        <Header/>
        <div className='container '> 
      <div className="Register">
        <h2>create an account</h2>
        <Formik
         initialValues={{
            fullName: '',
            email: '',
            phoneNumber: '',
            password:'',
            confirmPassword: ''
         }}
         validationSchema={SignupSchema}
         onSubmit={values => {
          handleRegister(values)
         }}
       >
         {({ errors, touched }) => (
           <Form>
             <Field name="fullName" placeholder="Full Name"/>
             {errors.fullName && touched.fullName ? (
               <div>{errors.fullName}</div>
             ) : null}
             <Field name="email" type="email" placeholder="Email"/>
             {errors.email && touched.email ? <div>{errors.email}</div> : null}
             <Field name="password" type="password" placeholder="Password"/>
             {errors.password && touched.password ? <div>{errors.password}</div> : null}
             <Field name="confirmPassword" type="password" placeholder="Confirm Password"/>
             {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
             <Field name="phoneNumber" type="text"  placeholder="Phone Number"/>
             {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
             <button type="submit">Signup</button>
           </Form>
         )}
       </Formik>
       </div>
        <p>Already have an account? <Link href="/login">Sign in </Link></p>
    
      </div>
      </div>
    )
  }

export default Register;