import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
