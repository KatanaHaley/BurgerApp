import React from 'react';
import BurgerData from './pages/BurgerData.js'
import SearchUI from './components/SearchUI.js';
import Navigation from './components/Navigation.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navigation />
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path="burgerdata" element={<BurgerData />} />
          <Route path="searchui" element={<SearchUI />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App