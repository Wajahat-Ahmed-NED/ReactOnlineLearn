import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {


  const [mode, setMode] = useState('light')
  const handleMode=()=>{
    if (mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='whitesmoke'
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='rgb(0, 9, 63)'
    }
  }

  return (
    <div className="App">

      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} func={handleMode}/>
      <TextForm heading="Enter the text to analyze" mode={mode}/>
      {/* <About/> */}
      
    </div>
  );
}

export default App;
