import React from 'react';
import Home from './pages/home';
import Articles from './pages/articles';
import Article from './pages/article';
import Videos from './pages/videos';

import Menu from './component/Header/menu';
import FooterBar from './component/Footer/footerbar';

import { BrowserRouter, Routes, Route, Navigate, Redirect, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/articles/:id' exact element={<Article />} />
          <Route path='/articles' exact element={<Articles />} />
          <Route path='/videos' exact element={<Videos />} />
        </Routes>
        {/* <FooterBar /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
