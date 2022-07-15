import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TEXTFORM from './components/TEXTFORM';
import React, {useState} from 'react';


function App() {
const [mode, setMode] = useState('light')

const toggleMode = ()=>{
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';

  }
}
  return (
  <>
  <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
  <div classname="container my-3">
  <TEXTFORM heading="Enter the text to analyze below" mode={mode}/>
  {/*<About/>*/}
  
  </div>
  </>
  );
}

export default App;
