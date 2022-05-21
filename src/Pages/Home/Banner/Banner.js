import React from 'react';
import banner from '../../../Assets/banner/banner.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg" />
                <div className='mr-10'>
                    <h1 className="text-5xl font-bold">New high-performance, compact and lightweight SCARA robot</h1>
                    <p className="py-6">The competitively-priced LPH-040 4-axis LPH-040 handles lighter duty applications with ease, such as electronics, assembly, and pick-and-place.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;