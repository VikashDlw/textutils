import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

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
      <Navbar title="TextUtils" About="About Us" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}  />
      <div className="container  my-3">
        <TextForms heading="Enter Text to analyze below" mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
      
    </>
  );
}
export default App;
