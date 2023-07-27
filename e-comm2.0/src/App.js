
import Home from './Components/Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Pages/Home/NavBar';
import About from './Components/Pages/About/About';
import ContextProvider from './Components/Conrext-store/ContextProvider';
import Header from './Components/Header';
import Authentication from './Components/Authentication/Authentication';
import React, { Fragment, Suspense, useContext } from 'react';
import cartContext from './Components/Conrext-store/CartContext';
import Contact from './Components/Pages/ContactUS/Contact';
import Store from './Components/Pages/Store/Store';
import SingleProduct from './Components/Pages/SingleProduct/SingleProduct';

function App() {

  const ctx=useContext(cartContext)

  

  return (
    <Fragment>
      <Suspense fallback={<div style={{"position":"fixed" , "top":"50%"}} className='text-center'>Loading...</div>}>
     
       <NavBar />
       <Header />
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path='/store' element={ctx.isLoggedIn ? <Store /> :<Authentication /> } />

    
      <Route path='/about' element={<About />} />
      <Route path='/login' element={!ctx.isLoggedIn ? <Authentication /> : <Store />} />
      <Route path='/singleproduct/:id' element={<SingleProduct />} />
      <Route path='/contact' element={ctx.isLoggedIn ? <Contact /> : <Authentication />} />
      <Route path='*' element={<Home />} />
     
    </Routes>
    </Suspense>
  </Fragment>
  );
}

export default App;
