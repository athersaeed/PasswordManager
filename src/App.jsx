import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Manager from './Components/Manager.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Manager />
    </>
  )
}

export default App
