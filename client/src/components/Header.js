
 import React from 'react'
import Image from 'next/image'
import Logo from '@/images/TNLOGO.png'
import { useSelector } from 'react-redux'
import { Avatar, Space } from 'antd';

 export default function Header() {
  const {isLoggedIn, userDetails} = useSelector(state=>state.users)
  
  return (
   <header>
    
     <div className="container">
       <nav>
        <div className="logo">
           <a href='/'><Image src={Logo} alt="Picture of the author"/></a>
        </div>

        {isLoggedIn?(

<Avatar
size="large"
style={{
backgroundColor: '#b4b4b4d5',
color: '#000',
marginTop:'33px',
fontSize: '1.5rem',
marginRight: '10px'
}}
>
U
</Avatar>  
         
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