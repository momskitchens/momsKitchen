import { useEffect, useState } from 'react'
import authService from './appwrite/auth';
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Header from "./components/User/Header"
import Footer from "./components/User/Footer"
import {login,logout} from "./store/authSlice"
import { useLocation } from 'react-router-dom';

function App() {
  const[loading,SetLoader] = useState(true);
  const location = useLocation();
  const dispatched = useDispatch();
  const userData = useSelector((state)=>state.auth.userData);
  const showFooter = location.pathname != '/login' && location.pathname != '/signup' 
  useEffect(()=>{

     authService.getCurrentUser()
     .then((userData)=>{
      if(userData){
        dispatched(login({userData}));
      }else{
        dispatched(logout());
      }
     })
     .finally(()=>SetLoader(false))

  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-200 '>
     <div className='w-full block'>
       <Header />
       <main>
          <Outlet />
       </main>
       { showFooter ? <Footer /> : null}
      </div> 
    </div>
  ) : null

   
}

export default App
