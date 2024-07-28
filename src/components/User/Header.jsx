import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import MomsTitle from '../MomsTitle';
import { IoMdClose } from "react-icons/io";
import AOS from 'aos';

// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { IoCloseOutline } from "react-icons/io5";
// import Image from "next/image";
// import clsx from "clsx";


function Header() {
//   const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [activeItem, setActiveItem] = useState('Home');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [isSideMenuOpen, setMenu] = useState(false);

  useEffect(()=>{
    AOS.init({})
  })

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Menu',
      slug: '/menu',
      active: authStatus,
    },
    {
      name: 'About',
      slug: '/about-us',
      active: authStatus,
    },
    {
      name: 'Contact',
      slug: '/contact',
      active: authStatus,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'SignUp',
      slug: '/signup',
      active: !authStatus,
    },
  ];

  const handleClick = (slug, name) => {
    setActiveItem(name);
    navigate(slug);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    
   <main className=' fixed  w-full z-10'>
      <nav className='flex justify-between sm:justify-around px-8 items-center py-6 text-white  bg-green-950 '>
         <section className='flex gap-4 '>
             <FiMenu  
             onClick={()=>{setMenu(true)}}
             className="text-3xl sm:hidden cursor-pointer  " />
             {/* <Link href="/" > */}
            <MomsTitle children="Moms Kitchen" classname="text-white text-xl"/>
            {/* </Link> */}
         </section>

   

         <ul className=' items-center  hidden  sm:flex '>
             {navItems.map((item)=> item.active ?
                     <li key={item.name}>
                      <button onClick={()=>handleClick(item.slug,item.name)}
                         className={`inline-bock text-white font-bold sm:px-6 px-2 py-2 duration-200 hover:bg-green-200  hover:text-black rounded-full  ${activeItem === item.name ? ' border-b-2 border-green-200' : ''} `}
                         > 
                          {item.name}
                      </button>
                     </li> : null
            )}
         </ul>

          {isSideMenuOpen && <div className=' fixed  sm:hidden inset-0 bg-black/50 backdrop-blur-sm z-30   ' data-aos = "slide-right"  >
         <section className="text-black bg-green-950 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-20 w-56 flex  ">
            <IoMdClose 
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer text-white"
            />
                <MomsTitle children="Moms Kitchen" classname="text-white ml-2 text-xl"/>
                <ul>
                  {navItems.map((item)=> item.active ?
                     <li key={item.name}>
                      <button onClick={()=>handleClick(item.slug,item.name)}
                         className={`inline-bock text-white font-bold sm:px-6 px-2 mt-5 py-2 duration-200 hover:bg-green-200  hover:text-black rounded-full  ${activeItem === item.name ? ' border-b-2 border-green-200' : ''} `}
                         > 
                          {item.name}
                      </button>
                     </li> : null
            )}
            </ul>
             
          </section>
       </div>
     }

     {authStatus ?<div className=''>
                 <button 
                  onClick={()=>handleClick("/","profile")}
                  className='border-2 border-green-100 rounded-xl font-bold  px-5 py-2 bg-green-950'
                 >

                    Profile

                 </button>
        </div> : null}
      </nav>
   </main>

  
  );
}

export default Header;


