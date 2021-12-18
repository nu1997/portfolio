import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

// MUI
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// Pages
import Main from './Pages/Main.jsx';
import Study from './Pages/Study.jsx';
import Project from './Pages/Project.jsx';
import Connect from './Pages/Connect';

function App() {
  return (
    <div className="App">
      <Router basename="/portfolio">
        <Container fixed>
          <nav>
            <Link className="Category" to="/">Home</Link> |{" "}
            <Link className="Category" to="/study">Resumé</Link> |{" "}
            <Link className="Category" to="/projects">Projects</Link> |{" "}
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
