import './App.css';
import Header from './Header';
import Navbar from './Nav';
import Main from './Main';
import Footer from './Footer';
import './Components.css';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <>
      <Header/>
      <Navbar/>
      <Main/>
      <Footer/>
    </>
    </Router>
  );
}



export default App;
