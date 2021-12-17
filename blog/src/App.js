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
      <Router basename="/portfolio">
        <Container fixed>
          <nav>
            <Link className="Category" to="/">Home</Link> |{" "}
            <Link className="Category" to="/study">Projects</Link> |{" "}
            <Link className="Category" to="/projects">Resume</Link> |{" "}
            <Link className="Category" to="/connect">Connect</Link>
          </nav>
        </Container>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/study' element={<Study />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/connect' element={<Connect />} />
        </Routes>
      </Router>
      <CssBaseline />
    </div>
  );
}

export default App;
