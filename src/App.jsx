import React from 'react';
import { useState } from 'react'
import Header from './Components/Header/Header'
import WelcomePage from './Pages/WelcomePage/WelcomePage';
import Footer from './Components/Footer/Footer';
import PartnerPage from './Pages/PartnerPage/PartnerPage';
import BookingPage from './Pages/BookingPage/BookingPage';


function App() {
    return (
        <>

            <Header />
            <WelcomePage/>
            <Footer />
            <PartnerPage />
            <BookingPage />

        </>
    )
}

export default App
