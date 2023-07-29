import React from 'react'
import Header from '../components/Header';
import Image from 'next/image'
import np from '../images/nepal.jpeg'


export default function home() {
  return (
    <>
    <Header/>

    <Image src = {np} height = "100vh" width ="100%" alt="bgimg" objectFit= "cover"/>

    <div className="content">
          <h1>EXPLORE<br />DREAM<br /><span>DESTINATION</span></h1>
         <p>
        
         </p>
           <button className="btn">BOOK NOW</button>
       </div>

       

    </>


        
  )
}

  