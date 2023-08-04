
 import React from 'react'
import Image from 'next/image'
import Logo from '@/images/TNLOGO.png'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router';
import { Avatar, Space, Popover } from 'antd';
import Link from 'next/link';


 export default function Header() {
   const router =useRouter()
   const handleLogout =()=>{
     router.push('/profile')
   }
   const {isLoggedIn, userDetails} = useSelector(state=>state.users)
  const content = (
     <div>
  
      <Link href="/profile">Profile</Link>
       <p onClick={handleLogout}>Logout</p>
    </div>
  );
  
  return (
   <header>
    
     <div className="container">
       <nav>
        <div className="logo">
           <a href='/'><Image src={Logo} alt="Picture of the author"/></a>
        </div>

        {isLoggedIn?(
          <div>
             
        
        <Popover placement="bottom" title={userDetails.fullName} content={content} trigger="click">
       
        <Avatar
       size="large"
       style={{
       backgroundColor: '#fde3cf',
       color: '#f56a00',
       marginTop:'33px',
       fontSize: '1.5rem',
       marginRight: '10px'
       }}
       >
      {userDetails.fullName[0]}
       </Avatar>
       </Popover>
       </div>
         
  
         ): <ul className="nav-menus">
          
        <li className="link"><a href="#">Home</a></li>
          <li className="link"><a href="#">Destinations</a></li>
          <li className="link"><a href="#">Reviews</a></li>


          <div className="search">
          <input type="text" placeholder="Search" />
          </div>


            <li><a href="/login">Login</a></li>
             <li><a className="active" href="/register">Signup</a></li>
         </ul>  }


           </nav>
     </div>
        
    </header>
    
   )
 }