import React, { useState } from 'react';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import 'react-notifications/lib/notifications.css';
import { useNavigate } from 'react-router';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/api/user/login", {
      email: email,
      password: password
    })
    .then((res) => {
      localStorage.setItem("token", res.headers.token);
      NotificationManager.success(`User has been successfully logged in`, "", 3000);
      navigate("/home")
    })
    .catch((err) => {
      console.log(err);
    });
  }
  


  return (
    <div>

<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      <h2 className="font-bold text-center text-xl text-gray-600">Login Form</h2>
      <p className="text-gray-700 text-center mb-6">Please Provide Valid Credentials.</p>

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>
          <form className="mx-1 mx-md-4" onSubmit={(e) => login(e)}>
          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
       
              <div className="md:col-span-5">
                <label for="email">Email Address</label>
                <input 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"placeholder="email@domain.com" />
              </div>


              <div className="md:col-span-5">
                <label for="email">Password</label>
                <input 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password" name="password" id="password" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Password" />
              </div>

         

      
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "type='submit' onSubmit={(e) => login(e)}>Submit</button>
                </div>
              </div>
            </div>
          </div>
</form>
        </div>
      </div>
    </div>

    <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right">
      <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"/>
    </a>
  </div>
</div>

    </div>
  )
}

export default Login;
