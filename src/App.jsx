import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// components

import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <div>
        asd
      </div>
    </>
  )
}

export default App
