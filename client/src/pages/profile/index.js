import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, Modal } from 'antd';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  newPassword: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    confirmNewPassword: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
  
});

const ChangePassForm = () => {
  return (
  <div>
    <Formik
      initialValues={{
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="currentPassword" type="password" placeholder="Current password" />
          {errors.currentPassword && touched.currentPassword ? (
            <div>{errors.currentPassword}</div>
          ) : null}
          <Field name="newPassword" type="password" placeholder="New password" />
          {errors.newPassword && touched.newPassword ? (
            <div>{errors.newPassword}</div>
          ) : null}
          <Field name="confirmNewPassword"  type="password" placeholder=" Confirm New password"  />
          {errors.confirmNewPassword && touched.confirmNewPassword ? <div>{errors.confirmNewPassword}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
  
)};



const Profile = () => {
  const {userDetails}= useSelector(state=>state.users)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleSubmit=()=>{
    alert ("submit")
  }

   return(
  <Card title="Your Profile">
    <Card type="inner" title="User Details" extra={<a href="#">Edit</a>}>
     Full Name : {userDetails.fullName} <br/>
     Email : {userDetails.email} <br/>
     Phone Number :{userDetails.phoneNumber} <br/>
     
    </Card>
    <Card
      style={{
        marginTop: 16,
      }}
      type="inner"
      title="Account Security"
      extra={<a href="#">More</a>}
    >
      <span onClick={()=>setIsModalOpen(true)}> Change Password</span><br/>
      Delete Your Account
    </Card>
    
    <Modal
    footer = {null}
     title="change password" open={isModalOpen} onOk={handleSubmit}   onCancel={()=>setIsModalOpen(false)}>
        <ChangePassForm/>
      </Modal>
  </Card>
)};
export default Profile;
