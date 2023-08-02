import React from 'react'
import Image from "next/image"
import kathmandu from '../images/kathmandu.jpg'
import pokhara from '../images/pokhara.jpg'
import suklaphanta from '../images/suklaphanta.jpg'
// import { convertLegacyProps } from 'antd/es/button/button'
import { useSelector } from 'react-redux';




 export default function Banner() {
  const { fullName } = useSelector(state => state.users)
  return (    
    <>
  

   <div className="destination__container">

   <div className="content">
          <h1>EXPLORE<br />DREAM<br /><span>DESTINATION</span></h1>
         <p>
         There may be many reasons to fall in love with your visit to Nepal,
         but only a minute in this beautiful land may give you a reason to fall
         in love with its natural beauty; visit Nepal, and explore your next dream
         destination.
         </p>
           <button className="btn">BOOK NOW</button>
       </div>
       

         <div className="destination__grid"> 

          <div className="destination__card">
           <Image src={kathmandu} height="200" width="250" className="kathmandu" alt="destination" />

            <div className="card__content">
              <h4>KATHMANDU</h4>
              <p>
              Sprawled over its namesake valley surrounded
              by Himalayan mountains, Kathmandu is Nepal's
              capital and most-visited destination, full of 
              ancient temples, golden pagodas and natural beauty.
            

              </p>
              <button className="btn">Read More</button>
            </div>
            </div>
            

            <div className="destination__card ">
           <Image src={pokhara}  height="200" width="250" className="pokhara" alt="destination" />
            
            <div className="card__content">
              <h4>POKHARA</h4>
              <p>
              Pokhara, Nepal's most popular tourist
              destination, is known for its Himalayan 
              range and lakes. Pokhara is also well-known
              for its adventure activities such as boating,
              trekking, rafting, and bungee jumping.

              </p>
              <button className="btn">Read More</button>
            </div>
            </div>
            


            <div className="destination__card">
           <Image src={suklaphanta}  height="200" width="250" className="suklaphanta" alt="destination" />

            <div className="card__content">

             <h4>SHUKLAPHANTA</h4>
              <p>
              Shuklaphanta National Park is Nepal's youngest 
              and rarely visited, consequently pristine wildlife gem. 
              This wild beauty of the far western region of Nepal is
              home to the largest herd with more than 2000 swamp deers.
               
              </p>
              <button className="btn">Read More</button>
            </div>
            </div>
        
        </div>

        </div>
       
         

   
   </>
   
   )
   }
