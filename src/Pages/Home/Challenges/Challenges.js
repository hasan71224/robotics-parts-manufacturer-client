import React from 'react';
import challenges from '../../../Assets/manufecture/manufecture1.png'

const Challenges = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={challenges} className="max-w-sm rounded-lg" />
                <div className='ml-20'>
                    <h1 className="text-5xl font-bold">Robots Help Manufacturing Companies Meet Challenges.</h1>
                    <p className="py-6">
                        <li>Robots do the dirty, dangerous and menial tasks so humans can assume more challenging and satisfying jobs.</li>
                        <li>Robots keep working without vacation time, lunch breaks or sick days.</li>
                        <li>Robots increase productivity and quality, helping companies grow and become more competitive.</li>
                        <li>Robots can be programmed easily and quickly by trained and skilled workers.</li>
                        <li>Robot production today has reached the point at which they can be purchased and installed in less time and for less money.</li>
                        <li>Robots create jobs in robotics, programming engineering and integration. Other jobs are created as the higher quality and increased productivity lowers costs and stimulates demand for everyone.</li>
                    </p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Challenges;