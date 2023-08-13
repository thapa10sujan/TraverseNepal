import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'
 import Header from '../../components/Header'
 import { setUserDetails } from '@/redux/reducerSlice/user';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Button, message, Space } from 'antd';

 

const Login = () => {
  const router = useRouter()
  const [msg, contextHolder] = message.useMessage();  
  const dispatch = useDispatch()
    const handleLogin=async(values)=>{
      try{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    };
    const res = await fetch('http://localhost:4000/login',requestOptions)
    const data = await res.json()
     if(data && data.success && res.status==200){

      dispatch(setUserDetails(data))
      router.push('/')
        msg.info(data.msg);
     }else{
      msg.info(data.msg);
     }
      
  }catch(err){
    msg.info('Something went wrong');
    }
    }

    
    const LoginSchema = Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required')
    });
    return(
        <>
        {contextHolder}
        <Header/>
      <div className='container'> 

      <div className="app--login">
        <h2>Please Login</h2>
        <Formik
         initialValues={{
           email: '',
           password:''
         }}
         validationSchema={LoginSchema}
         onSubmit={values => {
           // same shape as initial values
           handleLogin(values);
         }}
       >
         {({ errors, touched }) => (
           <Form>
            <Field name="email"  placeholder="Email"/>
             {errors.email && touched.email ? <div>{errors.email}</div> : null}
             <Field name="password" type="password" placeholder="Password"/>
             {errors.password && touched.password ? <div>{errors.password}</div> : null}
             <button type="submit">Login</button>
           </Form>
         )}
       </Formik>
        <p>Don't have an account? <Link href="/register">Sign up</Link></p>
      </div>
      
      </div>

      </>
    )
         }

export default Login;