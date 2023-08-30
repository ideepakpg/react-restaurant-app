import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HomePage from '../pages/HomePage/HomePage'
import DishesPage from '../pages/DishesPage/DishesPage'
import BookingPage from '../pages/BookingPage/BookingPage'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'


function LayoutRoutes() {

    return (

        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/dishes' element={<DishesPage />} />
                <Route path='/services' element={<BookingPage />} />
                <Route path='/about-us' element={<AboutUsPage />} />
                <Route path='/*' element={<NotFoundPage />} />
                <Route path='/react-restaurant-app' element={<HomePage />} />
            </Routes>

            <Footer />
        </Router>

    )
}

export default LayoutRoutes;