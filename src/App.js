import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Expenses from './pages/expenses/expenses.js';

export default function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Expenses />
      </Router>
    </>
  );
}
