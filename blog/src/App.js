import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

// MUI
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// Pages
import Main from './Pages/Main.jsx';
import Resume from './Pages/Resume.jsx';
import Project from './Pages/Project.jsx';
import Connect from './Pages/Connect';

function App() {
  return (
    <div className="App">
      <Router basename="/portfolio">
        <nav className="Navbar">
          <Link className="Category" to="/">Home</Link> |{" "}
          <Link className="Category" to="/projects">Projects</Link> |{" "}
          <Link className="Category" to="/resume">Resumé</Link> |{" "}
          <Link className="Category" to="/connect">Connect</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/connect' element={<Connect />} />
        </Routes>
      </Router>
      <CssBaseline />
    </div>
  );
}

export default App;
