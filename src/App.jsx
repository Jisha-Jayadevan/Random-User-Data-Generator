import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserData from './UserData'

function App() {
  
  return (
    <>
    <div className='container mt-4'>
      <div style={{height:'550px'}} className='w-100 d-flex flex-column align-items-center justify-content-center '>
        <h1 className='fw-bolder'>Random User Data Generator</h1>
        <UserData/>
      </div>

    </div>
      
    </>
  )
}

export default App
