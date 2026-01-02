import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Manager from './Components/Manager.jsx'
import Footer from './Components/Footer.jsx'
import Table from './Components/Table.jsx'
import React from 'react'
import { toast } from 'react-toastify'

function App() {
  const [passwordArray, setPasswordArray] = useState([]);
  const [form, setForm] = useState({site: "", username: "", password: ""})

  useEffect(() => {
    let passwordDetails = localStorage.getItem("passwords");
    if (passwordDetails) {
      setPasswordArray(JSON.parse(passwordDetails));
    }
  }, []);

  const deletePassword = (id) => {
  
    let confirmDelete = window.confirm("Are you sure you want to delete this password?");
    if (!confirmDelete) {
      return;
    }
    toast('Password Deleted!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    let newPasswordArray = passwordArray.filter(item => item.id !== id);
    setPasswordArray(newPasswordArray);
    localStorage.setItem("passwords", JSON.stringify(newPasswordArray));
  }

  const editPassword = (id) => {
    toast('Password Edited!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    // Logic to edit password can be implemented here
    setForm(passwordArray.find(item => item.id === id));
    let newPasswordArray = passwordArray.filter(item => item.id !== id);
    setPasswordArray(newPasswordArray);
    // localStorage.setItem("passwords", JSON.stringify(newPasswordArray));
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="grow">
        <Manager passwordArray={passwordArray} setPasswordArray={setPasswordArray} form={form} setForm={setForm} />
        <Table passwordArray={passwordArray} deletePassword={deletePassword} editPassword={editPassword} />
      </div>
      <Footer />
    </div>
  )
}

export default App
