import React from 'react';
import parts1 from '../../../Assets/parts/parts1.jpg';

const BlogsBanner = () => {
    return (
        <div className="hero h-96" style={{
            background: `url(${parts1})`,
            // backgroundSize: 'cover'
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-4xl">
                    <h1 className="mb-7 text-5xl font-bold">The goal of robot to assist humans.</h1>
                    <p className="mb-5 text-lg">Robotics is an interdisciplinary branch of computer science and engineering. Robotics involves design, construction, operation, and use of robots. </p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default BlogsBanner;