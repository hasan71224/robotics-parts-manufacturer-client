import React from 'react';

const InfoShip = ({img, cardTitle, description, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl pl-5 py-4 ${bgClass}`}>
            <figure><img className='w-42' src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoShip;