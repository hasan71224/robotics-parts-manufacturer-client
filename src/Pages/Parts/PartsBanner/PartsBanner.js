import React from 'react';
import parts1 from '../../../Assets/parts/parts1.jpg';

const PartsBanner = () => {
    return (
        <div className="hero h-96" style={{
            background: `url(${parts1})`,
            // backgroundSize: 'cover'
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-4xl">
                    <h1 className="mb-7 text-5xl font-bold">Creates custom robotic solutions</h1>
                    <p className="mb-5 text-lg">Wide Range of Industrial Robotic Automation Solutions. Find your robotic automation solution to grow your business, increase capacity, increase safety and reduce downtime costs.</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default PartsBanner;