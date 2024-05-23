import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import RegularLayout from './RegularLayout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Gallery from './pages/Gallery';
import Menu from './pages/Menu';
import About from './pages/About';
import FormSubmitted from './pages/FormSubmitted';
import ErrorPage from './pages/ErrorPage';
import AdminLayout from './AdminLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RegularLayout />}>
      <Route path="" element={<Home />} />
      <Route path="blog" element={<Blogs />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="menu" element={<Menu />} />
      <Route path="about" element={<About />} />
      <Route path="/formsubmitted" element={<FormSubmitted />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
    <Route path="/adminpanel" element={<AdminLayout />}>
      {/* Define admin panel routes here */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
