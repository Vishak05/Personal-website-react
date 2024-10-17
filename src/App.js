import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <Router>
      <div style={{ background: isDarkMode ? '#121212' : '#ffffff', color: isDarkMode ? '#ffffff' : '#000000', minHeight: '100vh' }}>
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/" element={
              <div>
                <h1>Welcome to My Website</h1>
                <p>Select a page from the navbar.</p>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;