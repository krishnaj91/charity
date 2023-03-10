import React from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
  const navigate=useNavigate()
  return (
    <center>Dashboard
      <h1>test shortcut</h1>
      Rs:<input value='100'/>
      <button onClick={()=>{navigate('/payment'),localStorage.setItem('amount','100')}}>PAYMENT</button>
    </center>
  )
}

export default Dashboard