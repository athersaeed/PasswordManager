import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Manager from './Components/Manager.jsx'
import Footer from './Components/footer.jsx'
import Table from './Components/Table.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwordDetails = localStorage.getItem("passwords");
    if (passwordDetails) {
      setPasswordArray(JSON.parse(passwordDetails));
    }
  }, []);

  return (
    <>
      <Navbar />
      <Manager passwordArray={passwordArray} setPasswordArray={setPasswordArray} />
      <Table passwordArray={passwordArray} />
      <Footer />
    </>
  )
}

export default App
