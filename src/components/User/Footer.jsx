import React from 'react'
import MomsTitle from '../MomsTitle'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'
function Footer() {
  const navigate = useNavigate();
  return (
    <>
    
    <div className='bg-green-950 text-white '>
      <div className='flex justify-around'>
        <div className='m-10'>
            <MomsTitle children="Moms" classname="text-white text-8xl"  />
            <MomsTitle children="Kitchen" classname="text-white text-8xl"  />
                <div className='text-center m-2'>
                  <h1 className='text-white text-3xl font-bold'> ~ Ghar Ka Khana ~</h1>
                  <h1 className='text-white  text-2xl font-bold '> Launch & Dinner </h1>
                </div>
      </div>
        <div className=' hidden sm:inline w-52 h-52  m-10 p-10'>
                      <img src="/logo.jpeg" alt='Logo' className='w-full h-full' />
      </div>
    </div>

    <div className='flex justify-center items-center sm:flex-row flex-col sm:justify-around'>

           <div className='mt-5'>
                <ul>
                  <li className=''><Button
                     children="MENU"
                      classname='font-fraunces  text-lg'
                       onClick = {()=>{navigate("/menu")}}
                  /></li>
                  {/* <li className=''><Button
                     children="MOMS"
                      classname='font-fraunces  text-lg'
                       onClick = {()=>{navigate("/moms")}}
                  /></li> */}
                  <li><Button
                     children="ABOUT"
                      classname='font-fraunces   text-lg'
                       onClick = {()=>{navigate("/menu")}}
                  /></li>
                  <li><Button
                     children="CONTACT"
                      classname='font-fraunces text-lg'
                       onClick = {()=>{navigate("/contact")}}
                  /></li>
                </ul>
           </div>

           <div className='mt-10'>
              <h1 className='text-lg font-fraunces font-bold'> Where are we?</h1>
               <p>VIDYANAGAR , ANAND</p>
           </div>

           <div className='mt-10'>
           <ul>
                  <li><Button
                     children="TERMS & CONDITIONS"
                      classname='font-fraunces  text-lg'
                       onClick = {()=>{navigate("/")}}
                  /></li>
                  <li><Button
                     children="FAQs"
                      classname='font-fraunces  text-lg'
                       onClick = {()=>{navigate("/moms")}}
                  /></li>
               
                </ul>
              
           </div>

    </div>

    <div>
         <hr className='m-5'/>
         <h1 className='text-center p-3 font-fraunces'> © 2024 MOMS KITCHEN . ALL RIGHT RESERVED </h1>
    </div>

     
   </div>
      
     
    </>
  )
}

export default Footer