// import logo from './logo.svg';
// import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
