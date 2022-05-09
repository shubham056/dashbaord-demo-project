import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Investors from './pages/Invertors';
import Opportunities from './pages/Opportunities';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="investors" element={<Investors />} />
          <Route path="opportunities" element={<Opportunities />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
