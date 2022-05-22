import React from 'react';
import Footer from '../../Shared/Footer';
import AvailableParts from '../AvailableParts/AvailableParts';
import PartsBanner from '../PartsBanner/PartsBanner';

const Parts = () => {
    return (
        <div>
            <PartsBanner></PartsBanner>
            <AvailableParts></AvailableParts>
            <Footer></Footer>
        </div>
    );
};

export default Parts;