import './App.css';
import Navbar from './components/Navbar';
import TEXTFORM from './components/TEXTFORM';

function App() {
  return (
  <>
  <Navbar title="Textutils"/>
  <div classname="container my-3">
  <TEXTFORM heading="Enter the text to analyze below"/>
  </div>
  </>
  );
}

export default App;
