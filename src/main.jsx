import React from 'react'; // Lisää React-importti
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './Index.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);