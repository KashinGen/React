import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  return (
    <div className="App" data-testid="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
