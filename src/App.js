// import logo from './logo.svg';
// import './App.css';
import './/App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './components/project/Project';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    
      <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        // Theme is deeply merged with default theme
        colorScheme: 'dark',
        colors: {
          // Add your color
          'deep-blue': ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
          // or replace default theme color
          blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
        },

        shadows: {
          // other shadows (xs, sm, lg) will be merged from default theme
          md: '1px 1px 3px rgba(0,0,0,.25)',
          xl: '5px 5px 3px rgba(0,0,0,.25)',
        },

        headings: {
          fontFamily: 'Roboto, sans-serif',
          sizes: {
            h1: { fontSize: 35},
            div: { fontSize: 40 },
          },
        },
      }}
    >
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
    </MantineProvider>

  );
}



export default App;
