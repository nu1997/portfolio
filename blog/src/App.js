import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

// MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Pages
import Main from './Pages/Main.jsx';
import Resume from './Pages/Resume.jsx';
import Project from './Pages/Project.jsx';
import Connect from './Pages/Connect';


const mytheme = createTheme({
  palette: {
      primary: {
          light: '#f2da9e',
          main: '#f9bc15',
          dark: '#f19920',
          contrastText: '#fff',
      },
      secondary: {
          light: '#f2ede7',
          main: '#a29d97',
          dark: '#45423c',
          contrastText: '#fff',
      },
      success: {
          light: '#f2ede7',
          main: '#fee500',
          dark: '#45423c',
          contrastText: '#191600',
      },
      
  },
  typography: {
      fontFamily: "KoPubWorld",
      fontStyle: "normal",
      fontWeight: "Medium"
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mytheme}>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
