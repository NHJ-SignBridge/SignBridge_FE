import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Learning from './Learning';
import SignToText from './SignToText';
import './styles.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Sign Bridge! What do you want to do today?</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Learning" element={<Learning />} />
        <Route path="/SignToText" element={<SignToText />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
