import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode , setMode]= useState('light'); //weather dark mode is enable
  const [alert , setAlert]= useState(null);
  const showAlert=(message , type)=>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 2000);
  }
  const togglemode=()=>
    {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#1C2833 ';
        showAlert("Dark-Mode Enable","success");
      }else {
        setMode('light');
        document.body.style.backgroundColor = 'white ';
        showAlert("Dark-Mode Disable","success");
      }
    }
  return (
    
    <>
    <Router>
      <Navbar title="TextUtils" About="About Us" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}  />
        <div className="container">
        <Routes>
          <Route exact path="/" element={ <TextForms showAlert = {showAlert} heading = "Enter the text to analyze" mode = {mode}/>}>
          </Route>
          <Route exact path="/about" element={<About mode={mode} />}>
          </Route>
        </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
