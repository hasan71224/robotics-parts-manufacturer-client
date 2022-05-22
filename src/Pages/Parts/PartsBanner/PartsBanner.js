import React from 'react';
import parts1 from '../../../Assets/parts/parts1.jpg';

const PartsBanner = () => {
    return (
        <div class="hero h-96" style={{
            background: `url(${parts1})`,
            // backgroundSize: 'cover'
        }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-white">
                <div class="max-w-4xl">
                    <h1 class="mb-7 text-5xl font-bold">Creates custom robotic solutions</h1>
                    <p class="mb-5 text-lg">Wide Range of Industrial Robotic Automation Solutions. Find your robotic automation solution to grow your business, increase capacity, increase safety and reduce downtime costs.</p>
                    {/* <button class="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default PartsBanner;