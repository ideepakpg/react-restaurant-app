import React from 'react'
import WelcomePage from '../WelcomePage/WelcomePage'
import PartnerPage from '../PartnerPage/PartnerPage'
import BookingPage from '../BookingPage/BookingPage'
import DishesPage from '../DishesPage/DishesPage'
import AmbiencePage from '../AmbiancePage/AmbiancePage'
import DeliveryPage from '../DeliveryPage/DeliveryPage'
import AboutUsPage from '../AboutUsPage/AboutUsPage'

function Home() {

    return (
        <>

            <WelcomePage />
            <PartnerPage />
            <BookingPage />
            <DishesPage />
            <AmbiencePage />
            <DeliveryPage />
            <AboutUsPage />

        </>
    )
}

export default Home;