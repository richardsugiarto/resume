import logo from './logo.svg';
import './App.css';
import MyNavbarV2 from './components/MyNavbarV2';
import React from 'react';
import HomePage from './pages/home/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ThesisPage from './pages/ThesisPage';
import ThesisDetailPage from './pages/ThesisDetailPage';

function App() {
  return (
    <div>
      <div className='back'></div>
      <Router>
        <MyNavbarV2 />
        <Routes>
          <Route path="/" element={<div className='App'><HomePage /></div>} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/thesis" element={<ThesisPage />} />
          <Route path="/experience/:projectId" element={<ProjectDetailPage />} /> {/* dynamic route */}
          <Route path="/thesis/:thesisId" element={<ThesisDetailPage />} /> {/* dynamic route */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
