import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// import { useQuery } from 'react-query';
// import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L12CeCZVZA5aXd0auQjpsLUbZvy7vhgRqNFUmVFsWFm60r3aoUVgAxrcNSrMQGQmMWrxhaB8OHMvFly0RJBHHZ900j7lLeT39');


const Payment = () => {
    const {id} = useParams();

    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Payment Id: {id}</h2>

        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello {order.customerName}</p>
                    <h2 class="card-title">Please Pay for {order.partsName}</h2>
                    <p>Your Purchase Quantity: <span className='text-orange-700'>{order.purchaseQuantity}</span></p>
                    <p>Please Pay: {order.price * parseInt(order.purchaseQuantity)}</p>
                    {/* <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order}/>
                    </Elements>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Payment;