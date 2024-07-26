// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// let a = "Shariq Shahood";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode=()=>{
    if(mode=== 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#063a70'
    showAlert("Dark Mode has been Enabled",'primary')
    // document.title = 'TextUtils - Dark Mode';
    
    // setInterval(()=>{
    //   document.title="TextUtils - Dark Mode";
    // },2000)
    // setInterval(()=>{
    //   document.title="TextUtils- Switch To light Mode";
    // },3000)
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light Mode has been Enabled","warning")
    // document.title = 'TextUtils - Light Mode';

    // setInterval(()=>{
    //   document.title= "TextUtils - Light Mode";
    // },2000)
    // setInterval(()=>{
    //   document.title= "TextUtils- Switch To Dark Mode";
    // },3000)

  }
}
  return (

    <>
    <Router>
    <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    <div className="container my-5">
    <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>}>
          </Route>
    </Routes>
    </div>
    </Router>

    </>
    );
}

export default App;
