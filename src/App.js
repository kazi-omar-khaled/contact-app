import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './Component/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import AddContact from './Component/AddContact';
import EditContact from './Component/EditContact';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddContact />} />
        <Route path='/edit/:id' element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
