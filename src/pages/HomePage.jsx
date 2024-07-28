import React from 'react'
import Home from '../components/Home/Home'
import { useSelector } from 'react-redux'
import AuthHome from '../components/Home/AuthHome';
function HomePage() {
  const userStatus = useSelector((state)=>state.auth.status);
  return (
         <div>
          { userStatus ? <AuthHome /> : <Home />}
         </div>
  )
}

export default HomePage