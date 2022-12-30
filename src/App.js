import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  const [mode , setMode]= useState('light'); //weather dark mode is enable
  const togglemode=()=>
    {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#1C2833 ';
      }else {
        setMode('light');
        document.body.style.backgroundColor = 'white ';
      }
    }
  return (
    
    <>
      <Navbar title="TextUtils" About="About Us" mode={mode} togglemode={togglemode}/>
      <div className="container  my-3">
        <TextForms heading="Enter Text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>
      
    </>
  );
}
export default App;
