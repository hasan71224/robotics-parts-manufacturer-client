import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [deletingOrder, setDeletingOrder] = useState(null)


    const { data: order, isLoading, refetch } = useQuery("order",
    )
        useEffect(() => {
            if (user) {
                fetch(`http://localhost:5000/order?customer=${user.email}`, {
                    method: 'GET',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => {
                        console.log('res', res);
                        if (res.status === 401 || res.status === 403) {
                            signOut(auth);
                            localStorage.removeItem('accessToken');
                            navigate('/')
                        }
                        return res.json()
                    })

                    .then(data => {
                        setOrders(data);
                    })
            }
        }, [user])

    

    return (
        <div>
            <h2>My Orders: {orders.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Purchase Quantity</th>
                            <th>Parts Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => {
                                return (
                                    <tr key={order._id}>
                                        <th>{index + 1}</th>
                                        <td>{order.customerName}</td>
                                        <td>{order.purchaseQuantity}</td>
                                        <td>{order.partsName}</td>
                                        <td>{order.price * parseInt(order.purchaseQuantity)}</td>

                                        <td>
                                            {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}

                                            {(order.price && order.paid) && <span className='text-success font-bold'>Paid</span>}
                                        </td>

                                        <td>
                                        {(order.price && !order.paid) && <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>}

                                        {(order.price && order.paid) && <span className='text-success font-bold'>Pending</span>}
                                        </td>

                                    </tr>
                                )
                            }
                            )
                        }

                    </tbody>
                </table>
            </div>

            <td>
                {deletingOrder && <DeleteConfirmModal
                    deletingOrder={deletingOrder}
                    refetch={refetch}
                    setDeletingOrder={setDeletingOrder}
                ></DeleteConfirmModal>}
            </td>

        </div>
    );
};

export default MyOrders;