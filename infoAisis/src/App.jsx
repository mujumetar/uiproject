

import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'
import Charts from './components/Charts'
import Dashboard from './components/Dashboard'
import Sidebar from './components/sidebar'

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("/api")
      .then(res => setMessage(res.data.message),console.log(message))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
    
      <Sidebar />
      <Dashboard />
      <Charts />
        <div className="App">
        <h1>React + Express</h1>
        <p>{message}</p>
      </div>
    </>
  )
}

export default App


