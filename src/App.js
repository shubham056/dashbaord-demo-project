import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { SkeletonTheme } from 'react-loading-skeleton'
import Dashboard from './pages/Dashboard';
import Investors from './pages/Invertors';
import Opportunities from './pages/Opportunities';
import Orders from './pages/Orders';
import AddOpportunities from './pages/Opportunities/AddOpportunities';


function App() {
  return (
    <>
    <SkeletonTheme  highlightColor='#525252' borderRadius="0.5rem" height={10}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="investor" element={<Investors />} /> 
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="add-oppotunity" element={<AddOpportunities />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
      </SkeletonTheme>
    </>
  );
}

export default App;
