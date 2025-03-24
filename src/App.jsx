import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Opening from './components/Opening'

const App = () => {
  const [ isSplashVisible, setIsSplashVisible ] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsSplashVisible(false)
    },4000)
    return () => clearTimeout(timer);
  },[])
  return (
    <div >
   { isSplashVisible && <Opening/>}
      <Home/>
    </div>
  )
}

export default App
