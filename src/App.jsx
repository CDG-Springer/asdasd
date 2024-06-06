import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// components
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      console.log('teste');
    };

    window.addEventListener('scroll', handleScroll);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array vazio [] assegura que este efeito só seja executado uma vez, como componentDidMount

  return (
    <>
      <NavBar />
      <Home />
    </>
  )
}

export default App
