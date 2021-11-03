import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {


  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const handleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'whitesmoke'
      showAlert("Light Mode has been Enabled", 'success')
      document.title = "Textutils-Light Mode"
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(0, 9, 63)'
      showAlert("Dark Mode has been Enabled", 'success')
      document.title = "Textutils-Dark Mode"

    }
  }

  return (
    <div className="App">
<Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} func={handleMode} />



      <Alert alert={alert} />
      
      <Switch>
      <Route exact path="/about">
      <About mode={mode}/>
      </Route>
     
      <Route exact path="/">
      
    <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />
      </Route>
      </Switch>
    
    </Router >
  {/* <About/> */ }
      
    </div >
  );
}

export default App;
