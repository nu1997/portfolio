import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

// MUI
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// Pages
import Main from './pages/Main.jsx';
import Study from './pages/Study.jsx';
import Project from './pages/Project.jsx';
import Connect from './pages/Connect';

function App() {
  return (
    <div className="App">
      <Router>
        <Container fixed>
          <nav>
            <Link className="Category" to="/portfolio">Home</Link> |{" "}
            <Link className="Category" to="/portfolio/study">Projects</Link> |{" "}
            <Link className="Category" to="/portfolio/projects">Resume</Link> |{" "}
            <Link className="Category" to="/portfolio/connect">Connect</Link>
          </nav>
        </Container>
        <Routes>
          <Route path='/portfolio' element={<Main />} />
          <Route path='/portfolio/study' element={<Study />} />
          <Route path='/portfolio/projects' element={<Project />} />
          <Route path='/portfolio/connect' element={<Connect />} />
        </Routes>
      </Router>
      <CssBaseline />
    </div>
  );
}

export default App;
