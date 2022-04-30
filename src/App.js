// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");

  // Alert
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "white";
      setmode("light");
      showalert("light mode enabled!", "success")
    } else {
      document.body.style.backgroundColor = "#092558";
      setmode("dark");
      showalert("Dark mode enabled!", "success")
    }
  }



  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route path="/" element={<TextArea heading="Enter your text here" mode={mode} showalert={showalert} />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
