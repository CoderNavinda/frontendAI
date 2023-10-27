import React from 'react';
import './sidebar.css'; // Import your CSS file for styling
import { FaHome, FaUser, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import  {Newlogo} from '../../assets/dashboard.js';
import { firebaseApp } from "../../firebase";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from 'react';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';


export const  Sidebar=()=> {
  const auth = getAuth(firebaseApp);
  const navigate=useNavigate();
  const [authUser,setAuthUser]=useState(null);

  useEffect(()=>{
      const listen =onAuthStateChanged(auth,(user)=>{
              if (user){
                  setAuthUser(user)
              }else{
                  setAuthUser(null);
              }
      });
      return ()=>{
          listen();
      }
  },[]);
  
  const userSignOutBackend =()=>{

 
        
        axios.get('http://127.0.0.1:12000/logout')
      

.catch(error=> console.log(error))};

  const userSignOut =()=>{
    window.localStorage.removeItem("isLogedIn")
      signOut(auth).then(()=>{
          console.log('sign out')
          userSignOutBackend();
          alert('You have successfully logged out')
          
          navigate('/')
        

      }).catch(error=> console.log(error))};

  return (
    <div className="sidebarnew">
      <div >
        <img className='logonew' src={Newlogo} alt=''></img>
      </div>
      <ul className="nav-linksnew2">
        <li>
          <a href="/">
            <FaHome className='iconnew'/>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/dashboard">
            <FaChartBar className='iconnew'/>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/profile">
            <FaUser className='iconnew'/>
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="/">
           
            <FaSignOutAlt className='iconnew' />
            <span onClick={userSignOut}>Log out</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
