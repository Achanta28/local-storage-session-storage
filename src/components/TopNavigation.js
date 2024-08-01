import React from 'react'
import { Link,NavLink, useNavigate } from 'react-router-dom'

function TopNavigation() {

  let highlightisActiveLink = (obj) =>{
    console.log(obj);
  
      if(obj.isActive == true){
        return{backgroundColor:"deeppink",color:"black"}
      }

    }

   
  
  return (
    <div>
        <nav>
        
        <NavLink style={(obj)=>{
         
          return highlightisActiveLink(obj);
       
        }} to="/dashboard">Dashboard</NavLink>
        <NavLink
       style={(obj)=>{
         
        return highlightisActiveLink(obj);
     
      }} to="/tasks">Tasks</NavLink>
        <NavLink
        style={(obj)=>{
         
          return highlightisActiveLink(obj);
       
        }}  to="/message">Messages</NavLink>
        <NavLink
         style={(obj)=>{
          
         
            return highlightisActiveLink(obj);
         
          }}  to="/leaves">Leaves</NavLink>
        <NavLink
        style={(obj)=>{
         
          return highlightisActiveLink(obj);
       
        }} to="/" onClick={()=>{
          localStorage.clear()
        }}>Signout</NavLink>
        </nav>
        
    </div>
  )
}

export default TopNavigation