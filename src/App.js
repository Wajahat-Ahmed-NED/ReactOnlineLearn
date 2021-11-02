import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {


  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
                    setAlert(null)
    }, 1500);
  }
  const handleMode=()=>{
    if (mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='whitesmoke'
      showAlert("Light Mode has been Enabled",'success')
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='rgb(0, 9, 63)'
      showAlert("Dark Mode has been Enabled",'success')

    }
  }

  return (
    <div className="App">

      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} func={handleMode}/>
      <Alert alert={alert}/>
      <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>
      {/* <About/> */}
      
    </div>
  );
}

export default App;
