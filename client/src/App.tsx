import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

import { Home } from './pages/Home';
import { Offer } from './pages/Offer';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/offer/:id' element={<Offer />} />
      </Routes>
    </Layout>
  );
}

export default App;
