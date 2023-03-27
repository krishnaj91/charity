import React, { useState } from 'react'
import MessageIcon from '@mui/icons-material/Message';
import './help.css'

const Help = () => {
  const[help,setHelp]=useState(false)
  return (
    <div>
      {help==true &&
      <div className='help-card'></div>}
    <MessageIcon className='help-icon' fontSize='large' onClick={()=>setHelp(!help)}/>
    </div>
  )
}

export default Help