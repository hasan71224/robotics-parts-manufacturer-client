import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/rating')
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[])
    return (
        <div>
            <h2 className='text-2xl font-bold text-primary text-center mt-20'>Customer Review</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    reviews.slice(0,6).map(review => <Review
                        key={review._id}
                        review={review}
                        // setOrder={setOrder}
                    >
                    </Review>)
                }
            </div>
           {/* {order && <OrderModal order={order} setOrder={setOrder}> </OrderModal>} */}
        </div>
    );
};

export default ReviewSection;