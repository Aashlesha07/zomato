import React, { useState } from 'react';
import Header from '../../Components/header';
import TabOptions from '../../Components/tabOption';
import Footer from '../../Components/footer';
import Delivery from '../../Components/delivery';
import Diningout from '../../Components/diningout';
import Nightlife from '../../Components/nightlife';

const Homepage = () => {

    const [activeTab, setActiveTab] = useState("Delivery")

    return (
        <div>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
            {getCorrectedScreen(activeTab)}
            <Footer />
        </div>
    )
}
const getCorrectedScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery/>;
        case "Dining Out":
            return <Diningout/>;
        case "Nightlife":
            return <Nightlife/>;
        default:
            return <Delivery/>;
    }
}

export default Homepage
