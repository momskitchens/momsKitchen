import React from 'react'
import { Button } from '../Button'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import authService from '../../appwrite/auth'
function Menu() {


  return (
    <div className='sm:m-20 mt-20 m-5'>
          <div className='flex flex-wrap'>
               <div className='m-10 sm:w-2/5 w-full shadow-xl'>
                     <div className='rounded-2xl border-2  bg-green-200 border-black '>
                           <div className=''>
                              <Link className='font-bold bg-green-950 '
                                to='/order'
                              >
                                 <h2 className='text-right m-2 p-2'>Order Now</h2>
                              </Link>
                           </div>
                         <div>
                          <ul>
                            <li className=' m-5 mt-2 p-2  font-semibold'>
                               Malai Panner
                                <hr className='  border-b-1 border-black '/>
                            </li>
                            <li className=' m-5 mt-2 p-2 font-semibold'>
                                4 roti
                                <hr className='  border-b-1 border-black '/>
                            </li>
                            <li className=' m-5 mt-2 p-2 font-semibold'>
                               Daal Fry
                                <hr className='  border-b-1 border-black '/>
                            </li>
                            <li className=' m-5 mt-2 p-2 font-semibold'>
                               Zeera Rice
                                <hr className='  border-b-1 border-black '/>
                            </li>
                            <li className=' m-5 mt-2 p-2 font-semibold'>
                                Papad/Salad
                                <hr className='  border-b-1 border-black '/>
                            </li>
                          </ul>
                         </div>

                         <div className='bg-white rounded-2xl w-full border-black border-1'>
                             <div  className='p-2'>
                                <h1 className='font-bold '> Menu By</h1>

                                <div className='flex mt-3 w-full'>
                                   <div className='rounded-full w-28 h-20'>
                                      <img src="/Home/mom1.jpg"   className='w-full h-full rounded-full'/>
                                   </div>

                                   <div className='flex w-full justify-between items-start'>
                                       <div className='m-2'>
                                           <h1 className='font-semibold'> Meena Kumari</h1>
                                           <h1 className=' font-light'> From 2 Months</h1>
                                       </div>

                                       <div>
                                           <h1 className='font-bold '> <i> 90 Rs / tifin</i></h1>
                                       </div>

                                   </div>
                                </div>
                             </div>
                         </div>
                           
                     </div>
               </div>
          </div>
    </div>
  )
}

export default Menu