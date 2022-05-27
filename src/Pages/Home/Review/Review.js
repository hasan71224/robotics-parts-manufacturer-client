import React from 'react';

const Review = ({ review }) => {
    const { _id, name, img, description, productRating } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:mx-5">
            <div className="card-body justify-center items-center">
                {/* <div className="w-28">
                    <img src={img} alt={name} />
                </div> */}

                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={img} />
                    </div>
                </div>

                <h2 className="text-2xl card-title text-accent">Customer Name: {name}</h2>
                <p> <b>Description:</b> {description}</p>
                <p><b>Price:</b>{productRating} Star</p>
            </div>
        </div>
    );
};

export default Review;