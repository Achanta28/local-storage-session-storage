import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import TopNavigation from './TopNavigation'

function Dashboard() {
  let loca = useLocation();
  console.log(loca);
  return (
    <div>
        <TopNavigation/>
        <h2>Dashboard</h2>
        <h2>{loca&&loca.state&&loca.state.msg?
        loca.state.msg:"please nter login property"}</h2>  
    </div>
  )
}

export default Dashboard