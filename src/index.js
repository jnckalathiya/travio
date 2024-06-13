import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Footer from './Components/Footer';
import 'animate.css';
import Header from './Components/Header';
import AboutPage from './Components/Pages/AboutPage';
import ToureGuidePage from './Components/Pages/ToureGuidePage';
import DestinationPage from './Components/Pages/DestinationPage';
import DestinationDetailPage from './Components/Pages/DestinationDetailPage';
import ToureListPage from './Components/Pages/ToureListPage';
import ToureDetailsPage from './Components/Pages/ToureDetailsPage';
import ToureDealsPage from './Components/Pages/ToureDealsPage';
import BlogDetailsPage from './Components/Pages/BlogDetailsPage';
import BlogListPage from './Components/Pages/BlogListPage';
import GalleryPage from './Components/Pages/GalleryPage';
import ContactPage from './Components/Pages/ContactPage';
import FaqPage from './Components/Pages/FaqPage';
import ErrorPage from './Components/Pages/ErrorPage';
import BookinProcessPage from './Components/Pages/BookinProcessPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/destination' element={<DestinationPage/>}/>
    <Route path='/destinationdetailes' element={<DestinationDetailPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/tourelist' element={<ToureListPage/>}/>
    <Route path='/toureguide' element={<ToureGuidePage/>}/>
    <Route path='/touredeals' element={<ToureDealsPage/>}/>
    <Route path='/touredetails' element={<ToureDetailsPage/>}/>
    <Route path='/bloglist' element={<BlogListPage/>}/>
    <Route path='/blogdetails' element={<BlogDetailsPage/>}/>
    <Route path='/gallery' element={<GalleryPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/faq' element={<FaqPage/>}/>
    <Route path='/bookingprocess' element={<BookinProcessPage/>}/>
    <Route path='/*' element={<ErrorPage/>}/>
    

  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
);
