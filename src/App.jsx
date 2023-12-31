import { useState } from 'react'
import React from 'react';
import './App.css'
import { BrowserRouter,Routes,Route,Link, createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Home from './components/static/Home.jsx'
import About from './components/static/About.jsx'
import Vans, {loader as vanPageLoader} from './components/vans/Vans.jsx'
import VanDetails from './components/vans/VanDetails.jsx';
import '../server.js'
import Layout from './components/Layout.jsx';
import Host from './components/Host/Host.jsx';
import Dashboard from './components/Host/Dashboard.jsx';
import Income from './components/Host/Income.jsx';
import Reviews from './components/Host/Reviews.jsx';
import HostVan from './components/Host/HostVan.jsx';
import HostVanDetails from './components/Host/Van/HostVanDetails.jsx';
import HostVanInfo from './components/Host/Van/HostVanInfo.jsx';
import VanPricing from './components/Host/Van/VanPricing.jsx';
import VanPhotos from './components/Host/Van/VanPhotos.jsx';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/vans' element={<Vans />} loader={vanPageLoader} />
            <Route path='/vans/:id' element={<VanDetails />} />
            <Route path='/host' element={<Host />}>
              <Route index element={<Dashboard  />} /> 
              <Route path='income' element={<Income  />} />
              <Route path='vans' element={<HostVan  />} />
              <Route path='vans/:id' element={<HostVanInfo />} >
                <Route index element={<HostVanDetails />} />
                <Route path='pricing' element={<VanPricing />} />
                <Route path='photos' element={<VanPhotos />} />
              </Route>
              <Route path='reviews' element={<Reviews />} />
            </Route>
            <Route path='*' element={<h1>Page Not Found</h1>} />
          </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
