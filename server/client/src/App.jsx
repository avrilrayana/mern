import { useState,useEffect } from 'react'
import './App.css'
import './index.css';
import axios from 'axios';
import RegisterForm from './RegisterForm';

function App() {
  const [message,setMessage] = useState('')
  useEffect(()=>{
//Fetch ApI
    axios.get("http://localhost:8000/")
      .then(response => {
        setMessage(response.data)
      })
      .catch(error=>{
        setMessage(error.message)
      })
},[])
  return (
  <>
    <h1>Welcome to Health Plus</h1>
    <RegisterForm/>
  </>
)
}
export default App
