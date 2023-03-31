import React, { useState } from 'react'
import './admin.css'
import Dashboard from './Dashboard'
import Feed from './Feed'
import History from './History'

const Admin = () => {
    const [ step , setStep ] = useState('dashboard')
    const [ active , setActive ] = useState('dashboard')

  return (
    <>
        <div className='admin-nav'>
            <h3 onClick={()=>{setStep('dashboard'),setActive('dashboard')}} className={active==='dashboard' ? 'nav-active':''}>DASHBOARD</h3>
            <h3 onClick={()=>{setStep('history'),setActive('history')}} className={active==='history' ? 'nav-active':''}>PAYMENTS & HISTORY</h3>
            <h3 onClick={()=>{setStep('feed'),setActive('feed')}} className={active==='feed' ? 'nav-active' : ''}>FEED</h3>
        </div>
        <div>
            {step==='dashboard' && <Dashboard/>}
            {step==='history' && <History/>}
            {step==='feed' && <Feed/>}
        </div>
    </>
  )
}

export default Admin