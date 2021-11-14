import { useState } from 'react';
import Products from './components/Products'
import Details from './components/Details'
// ! To creat Router using React Dom
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:name' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;