import React, { useEffect, useState } from 'react'
import MomsTitle from '../MomsTitle'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css';

function Home() {
  // const navigate = useNavigate();
  const [time,setTime] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => !prevTime);
    }, 5000);
 
       // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }, []);

    useEffect(()=>{
      Aos.init({})
    })

  return (
    <>
 <div className='relative w-full h-[75vh] overflow-hidden bg-white/50 shadow-lg '>
    <img src='./Home/header.jpg' alt='header Img' className='w-full h-full object-cover opacity-90 filter z-10  saturate-200 '/>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap'>
        <MomsTitle classname=' text-8xl text-green-950 font-bold animate-scroll' children="Moms" />
        <MomsTitle classname=' ml-10 text-8xl text-green-950 font-bold animate-scroll' children="Kitchen" />
    <div className='text-center'>
         <h1 className= 'text-white text-3xl font-extrabold ' data-aos="fade-in" > ~ Ghar Ka Khana ~</h1>
         <h1 className='  text-white  text-2xl font-bold '> Launch & Dinner </h1>
    </div>
    </div>
</div>

   <div className='flex justify-center p-10  sm:h-[55vh]'> 
      <div>

      <MomsTitle children="About Us" classname="text-2xl m-5 p-3 "/>
      <p className='sm:w-1/2 m-5 p-3  text-lg font-thin'>
      At Mom's Kitchen, we believe that the heart of every home is the kitchen, and we're passionate about bringing the warmth and love of a home-cooked 
      meal to your table. Our journey began with a simple ideal to offer delicious, wholesome, and lovingly prepared meals that remind you of mom’s cooking.
      </p>
      <Button 
       children="Read More"
       classname='m-5 p-3 hover:bg-green-300 hover:text-black'
       onClick ={()=> navigate('/about-us')}
      />
      </div>
   </div>

   
   <div className='flex flex-col  sm:flex-row sm:h-[75vh] bg-green-950  '>
            {/* Image Section */}
            <div className=' sm:w-1/2 justify-end w-full h-1/2 sm:h-full'>
                <img src='/Home/menu.jpg' alt='Signup Illustration' className='w-full h-full object-cover' />
            </div>
    <div className=' flex flex-col items-center justify-center sm:w-1/2 w-full  rounded-t-2xl sm:rounded-none shadow-lg sm:shadow-none -mt-10 sm:mt-0'>
                <div className='flex flex-col items-center xl:items-start  text-white text-4xl font-extrabold sm:mt-0 mt-20  '>
                      Today's Menu
                </div>
              
                <div className=' flex flex-col items-center  mt-10 w-3/4 m-5 p-3 text-lg font-thin text-white'>
                    
                Our founder, lovingly known as Mom, personally 
                curates and uploads the menu for both lunch and dinner each day, ensuring a fresh and
                 delightful dining experience every time you order.

                </div>

                <Button
                  children="Check Out"
                  classname='bg-white m-5 p-3  hover:bg-green-300 hover:text-black'
                  textColor='bg-green-950'

                />
            </div>
        </div>

        <div className=' overflow-x-hidden'>

           <div className='flex m-10 justify-around' >
               <div className='w-2/5 sm:m-10 m-5 ' data-aos = "slide-right">
                     <img src='/Home/pic1.jpg' alt='' className='w-full h-full object-cover rounded-2xl rotate-6'></img>
               </div>
               <div className='w-2/5 sm:m-10  m-5 sm:mt-36 mt-20'  data-aos = "slide-left">
                     <img src='/Home/pic2.jpg' alt='' className='w-full h-full object-cover rounded-2xl -rotate-6'></img>
               </div>  
           </div>
 
           <div className=' flex justify-center m-1 p-5 '> 
            <h1 className=' sm:w-3/5 text-center sm:text-3xl font-bold font-fraunces text-green-950 '  data-aos = "fade-in">  
              “If you're tired of eating out and craving the comforting taste of homemade food, order from Mom's Kitchen today and enjoy a
            meal that feels just like  <span className='underline'>Ghar ka Khana</span>.”
            </h1>
           </div>

           <div className='flex m-10 justify-around' >
               <div className='w-2/5 sm:m-10 m-5 '  data-aos = "slide-right" >
                     <img src='/Home/pic3.jpg' alt='' className='w-full h-full object-cover rounded-2xl rotate-6'></img>
               </div>
               <div className='w-2/5 sm:m-10 m-5 sm:mt-36 mt-20 '  data-aos = "slide-left">
                     <img src='/Home/pic4.jpg' alt='' className='w-full h-full object-cover rounded-2xl -rotate-6'></img>
               </div>  
           </div>

        </div>

        <div className='flex flex-col  sm:flex-row sm:h-[75vh] bg-green-950  ' >
            {/* Image Section */}
            <div className=' sm:w-1/2 justify-end w-full h-[40vh] sm:h-full'>
                <img src='/Home/mom.jpg' alt='Signup Illustration' className='w-full h-full object-cover' />
            </div>
    <div className=' flex flex-col items-center justify-center sm:w-1/2 w-full  rounded-t-2xl sm:rounded-none shadow-lg sm:shadow-none -mt-10 sm:mt-0'>
                <div className='flex flex-col items-center xl:items-start  text-white text-4xl font-extrabold sm:mt-0 mt-20  '>
                      Our Moms
                </div>
              
                <div className=' flex flex-col items-center  mt-10 w-3/4 m-5 p-3 text-lg font-thin text-white'>
                    
                At the heart of Mom's Kitchen is Mom herself, the culinary genius and loving soul behind every meal we serve.
                 With decades of experience and a passion for cooking, Mom has always believed that food is not just about sustenance, but also about love, care, and tradition.
                </div>

                <Button
                  children="Check Out"
                  classname='bg-white m-5 p-3  hover:bg-green-300 hover:text-black'
                  textColor='bg-green-950'

                />
            </div>
        </div>

        
        <div className='flex flex-col  sm:flex-row sm:h-[75vh] bg-white  '>
            {/* Image Section */}
            <div className=' order-1 sm:order-2 sm:w-1/2 justify-end w-full h-1/2 sm:h-full p-24'>
                <img src='/Home/mom1.jpg' alt='Signup Illustration' className='w-full h-full object-cover' />
            </div>
    <div className=' flex flex-col sm:order-1 order-2 items-center justify-center sm:w-1/2 w-full  rounded-t-2xl sm:rounded-none shadow-sm sm:shadow-none -mt-24 sm:mt-0'>
                <div className='flex flex-col items-center xl:items-start  text-green-950 text-4xl font-extrabold sm:mt-0 mt-20  '>
                    Be a Mom Today
                </div>
              
                <div className=' flex flex-col items-center sm:w-auto w-3/4  mt-10 m-5 p-3 text-lg  text-green-950'>
                Create Delicious Meals and Watch Your Kitchen Dreams Turn into Daily Profits!✨
                </div>

                <Button
                  children="Sign Up"
                  classname=' m-5 p-3  hover:bg-green-300 hover:text-black'

                />
            </div>
        </div>

        <div className='m-5'>

                <div>
                  <h1 className='font-bold text-center sm:text-6xl  text-3xl font-fraunces '>  {time ? "~Dinner~" : "~Lunch~"} </h1>
                </div>

                <div className='flex sm:justify-around justify-center mt-10 '>
                     <h1 className='m-3 font-semibold text-center  sm:text-2xl p-2 '> <i>Order Timing </i></h1>
                     <h1 className='m-3 font-semibold text-center  sm:text-2xl p-2'> <i> {time ?"5.00 pm - 7.00 pm" : "9.00 am - 11.00 am"}</i></h1>
                </div>
                    
                <div className='flex sm:justify-around justify-center'>
                     <h1 className='m-3 font-semibold text-center  sm:text-2xl p-2 '> <i>Delivery Between  </i></h1>
                     <h1 className='m-3 font-semibold text-center  sm:text-2xl p-2'> <i>{time? "9.00 pm - 10.00 pm ":" 1.00 pm - 2.00 pm"}</i></h1>
                </div>
        </div>      
    </>
  )
}

export default Home




// <style jsx>{`
//     @keyframes scroll {
//         0% {
//             transform: translateX(100%);
//         }
//         100% {
//             transform: translateX(-100%);
//         }
//     }
    
//     .animate-scroll {
//         display: inline-block;
//         padding-right: 2rem; /* Space between texts if needed */
//         animation: scroll 10s linear infinite;
//     }
// `}</style>
