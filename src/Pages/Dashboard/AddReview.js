import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddReview = () => {

    const { register, formState: { errors }, handleSubmit, reset} = useForm();
    
    const imageStorageKey = 'c1dd83e2b223d428c938e8ce0f6eca42';

    const onSubmit = async data => {
        // console.log('data', data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const rating = {
                        name: data.name,
                        description: data.description,
                        productRating: data.productRating,
                        img: img
                    }
                    //send to your database
                    fetch('http://localhost:5000/rating', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(rating)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log('rating', inserted);
                            if (inserted.insertedId) {
                                toast.success('Rating added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the Rating')
                            }
                        })
                }
            })
    }

    return (
        <div>
            <h2>Add review</h2>

            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Add Product Review</h2>


                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text"
                                    placeholder="Review Description"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: "Description is required"
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product Rating</span>
                                </label>
                                <input type="text"
                                    placeholder="Rate Out of 10"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("productRating", {
                                        required: {
                                            value: true,
                                            message: "Rating is required"
                                        },
                                        minLength: {
                                            value: 1,
                                            message: 'Rating must out of 10'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.productRating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.productRating.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Photo</span>
                                </label>
                                <input type="file"
                                    className="w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: "Image is required"
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            <input className="btn text-white w-full max-w-xs uppercase mt-4" type="submit" value='ADD' />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;