import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Main from '../pages/Main'
import NewProduct from '../pages/NewProduct'
import ProductList from '../pages/ProductList'
import About from '../pages/About'

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route path='/new-product' element={<NewProduct/>}/>
            <Route path='/product-list' element={<ProductList/>}/>
            <Route path='about' element={<About/>}/>

        </Routes>

        <Footer/>
    </Router>
  )
}

export default AppRouter