import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Pages/MainPage.jsx';
import Card from './Pages/Card';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MainPage/>} />
          <Route path="/card/:userId" exact element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
