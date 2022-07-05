// import logo from './logo.svg';
// import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

import Project from './components/Project';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>  
        <Route path='/About' element={<About/>}> </Route>
        <Route path='/Project' element={<Project/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/' element={<About/>}> </Route>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
