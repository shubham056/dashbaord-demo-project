import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Investors from './pages/Invertors';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="investors" element={<Investors />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
