import React from 'react';
import AboutMe from './Components/AboutMe';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
