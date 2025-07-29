import React from 'react';
import AboutMe from './Components/AboutMe';
import Project from './Components/Project';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
}

export default App;
