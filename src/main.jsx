import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/Home/Home';
import NotFound from './views/NotFound';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Main;
