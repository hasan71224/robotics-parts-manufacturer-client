import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Challenges from '../Challenges/Challenges';
import Info from '../Info/Info';
import PartsSection from '../PartsSection/PartsSection';
import ReviewSection from '../ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <PartsSection></PartsSection>
            <Challenges></Challenges>
            <BusinessSummary></BusinessSummary>
            <ReviewSection></ReviewSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;