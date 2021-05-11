import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';
import 'semantic-ui-css/semantic.min.css';
import MainLayout from './layout/MainLayout';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

export default App;