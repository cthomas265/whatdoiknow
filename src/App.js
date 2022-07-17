// import logo from './logo.svg';
// import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './components/Project';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>  
        <Route path='/About' element={<About/>}/> 
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/' element={<About/>}/> 
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
