import './App.css';
//import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
     setAlert({
      msg: message,
      type: type
     })
     setTimeout(() =>{
      setAlert(null);
     }, 3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode has been enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
  } 

  return (
      <>
       {/* <Navbar title="TextUtils" aboutText="About Us"/> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to anaylyze below" alert={alert} mode={mode} />
       {/* <AboutUs /> */}
        </div>
      </>
  );
}

export default App;
