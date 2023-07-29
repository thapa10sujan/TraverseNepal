
 import React from 'react'
import Image from 'next/image'
import Logo from '@/images/TNLOGO.png'

 export default function Header() {
  return (
   <header>
     <div className="container">
       <nav>
        <div className="logo">
           <a href='/'><Image src={Logo} alt="Picture of the author"/></a>
        </div>


        <ul className="nav-menus">
          
        <li className="link"><a href="#">Home</a></li>
          <li className="link"><a href="#">Destinations</a></li>
          <li className="link"><a href="#">Contact Us</a></li>


          <div className="search">
          <input type="text" placeholder="Search" />
          </div>


            <li><a href="/login">Login</a></li>
             <li><a className="active" href="/register">Signup</a></li>
         </ul>      
           </nav>
     </div>
        
    </header>
    
   )
 }