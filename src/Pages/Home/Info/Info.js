import React from 'react';
import InfoShip from '../InfoShip/InfoShip';
import info1 from '../../../Assets/info/info1.png'
import info2 from '../../../Assets/info/info2.png'
import info3 from '../../../Assets/info/info3.png'

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5 mb-4">
            <InfoShip cardTitle='1. Connect' description='Connect your online store, import your products, then send us your inventory.' bgClass='bg-gradient-to-r from-secondary to-primary' img={info1}></InfoShip>
            <InfoShip cardTitle='2. Store' description='We store your inventory in a combination of our fulfillment centers.' bgClass='bg-accent' img={info2}></InfoShip>
            <InfoShip cardTitle='3 .Ship' description='As soon as a customer places an order, we ship it from the nearest fulfillment center.' bgClass='bg-gradient-to-r from-secondary to-primary' img={info3}></InfoShip>
        </div>
    );
};

export default Info;