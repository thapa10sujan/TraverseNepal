import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'antd';
import CustomModal from '@/components/Modal';

const Profile = () => {
  const {userDetails}= useSelector(state=>state.users)

   return(
  <Card title="Your Profile">
    <CustomModal/>
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
      Change Password <br/>
      Delete Your Account
    </Card>
  </Card>
)};
export default Profile;
