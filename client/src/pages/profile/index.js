import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, Modal } from 'antd';


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
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleSubmit}   onCancel={()=>setIsModalOpen(false)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
  </Card>
)};
export default Profile;
