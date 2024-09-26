import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./css/style.css";
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/my-portfolio">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Activity 3 - Portfolio
// #
// 1. Create your own portfolio web page using React JS.
// 2. Your portfolio should have at least 4 main section/page
// (dashboard/home, projects, about, contact).
// 3. Html element should be construct within a components
// (functional && class).
// 4. The use of props, state and event handling are required.
// 5. CSS and JS plugins are allowed but mixing with you own
// custom CSS is required.
export default App;
