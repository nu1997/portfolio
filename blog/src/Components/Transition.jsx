// import React from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import { Route, Router, useLocation } from 'react-router-dom';

// import Main from '../Pages/Main.jsx';
// import Resume from '../Pages/Resume.jsx';
// import Project from '../Pages/Project.jsx';
// import Connect from '../Pages/Connect';


// const Transition = () => {
  
//   const location = useLocation();
  
//   return (
//     <TransitionGroup className="transition-group">
//       <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
//         <Router location={location}>
//           <Route exact path='/' element={<Main />} />
//           <Route path='/resume' element={<Resume />} />
//           <Route path='/projects' element={<Project />} />
//           <Route path='/connect' element={<Connect />} />
//         </Router>
//       </CSSTransition>
//     </TransitionGroup>a
//   );
// };

// export default Transition;