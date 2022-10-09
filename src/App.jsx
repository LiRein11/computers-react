import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import './scss/style.scss'; 
import './index.css';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;