import React, { useEffect } from 'react'
import { NotificationManager } from 'react-notifications'
import { useNavigate } from 'react-router'

const Logout = () => {
    const navigate= useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            NotificationManager.error("Already logged out ", "" , 3000)
            navigate("/home")
        } 
        else{
            localStorage.removeItem("token")
            NotificationManager.warning("Successfully logged out ", "" , 3000)
            navigate("/home")
        }
    })
  return (
    <div>
      logout
    </div>
  )
}

export default Logout
