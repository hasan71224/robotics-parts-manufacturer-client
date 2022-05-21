import React from 'react';
import error from '../../Assets/error.jpg'
const NotFound = () => {
    return (
        <div className='flex justify-center mt-10'>
            <img className='h-96' src={error} alt="" />
        </div>
    );
};

export default NotFound;