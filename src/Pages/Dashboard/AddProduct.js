import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {

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
                    const product = {
                        name: data.name,
                        description: data.description,
                        minimumOrder: data.minimumOrder,
                        quantity: data.quantity,
                        price: data.price,
                        img: img
                    }
                    //send to your database
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log('product', inserted);
                            if (inserted.insertedId) {
                                toast.success('Product added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the Product')
                            }
                        })
                }
            })
    }

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            <h2>Add Product</h2>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Add New Product</h2>


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
                                    placeholder="Add a Short Description"
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
                                    <span className="label-text">Minimum Order</span>
                                </label>
                                <input type="text"
                                    placeholder="Enter Minimum Of order"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("minimumOrder", {
                                        required: {
                                            value: true,
                                            message: "Minimum Order is required"
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.minimumOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text"
                                    placeholder="Enter Product Quantity"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: "Quantity is required"
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text"
                                    placeholder="Enter Price Per Unit"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: "Price is required"
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Photo</span>
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

export default AddProduct;