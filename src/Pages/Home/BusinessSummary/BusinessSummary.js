import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-primary text-center py-10'>Business Summary</h2>
            <div className="stats stats-vertical lg:stats-horizontal shadow flex items-center justify-center m-10">
                <div className="stat bg-gradient-to-r from-secondary to-primary">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat bg-accent text-white">
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat bg-gradient-to-r from-secondary to-primary">
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;