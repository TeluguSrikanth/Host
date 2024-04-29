import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import VerifyPhone from './pages/VerifyPhone';

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-phone" element={<VerifyPhone />} />
        
      </Routes>
    </Router>
  );
};

export default App;
