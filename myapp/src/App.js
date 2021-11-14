import { useState } from 'react';
import Products from './components/Products'
import Details from './components/Details'
import { Routes, Route } from 'react-router-dom'


const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;