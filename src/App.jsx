import React from 'react'
import Background from "./components/Background"; 
import Foreground from './components/foreground';


const App = () => {
  return (
    <div className='realtive w-full h-screen bg-zinc-800'>
       <Background />
       <Foreground />
      
    </div>
  )
}

export default App