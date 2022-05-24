import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = ({order, setOrder}) => {
    // const {_id, name}= order
    const { partsId } = useParams();
    const [parts, setParts] = useState({});
    const [purchaseQuantity, setPurchaseQuantity] = useState()
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/parts/${partsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    const handleOrder = event =>{
        event.preventDefault();
        // const phone = event.target.phone.value;
        console.log(partsId, parts.name);
        const order = {
            partsId: partsId,
            partsName: parts.name,
            purchaseQuantity,
            price: parts.price,
            customer: user.email,
            customerName: user.displayName,
            // address: event.target.address.value,
            // phone: event.target.phone.value
        }
        console.log(order);
        fetch('http://localhost:5000/order',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.success){
                toast(`${parts.name} Order is confirm`)
            }
            else{
                toast.error(`This Order have an Error `)
            }
            navigate('/parts')
        })

    }


    let purchaseError;
    if (error) {
        purchaseError = <p className='text-red-500'>{error?.message}</p>
    }

    const handleQuantity = () => {
        let newQuantity = parseInt(purchaseQuantity)
        if (newQuantity > 99 && newQuantity <= parts.quantity) {
            newQuantity = parts.quantity - newQuantity
            console.log(newQuantity);
            let partsUpdate = { ...parts, quantity: newQuantity }
            console.log(partsUpdate);
            setParts(partsUpdate);

            //update parts quantity
            const updatedParts={
                quantity: newQuantity
            }
            fetch(`http://localhost:5000/parts/${partsId}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedParts)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })


        }
        else {
            alert('Enter valuable quantity');
        }
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:mx-5 ">
                <div className="card-body">
                    <div className='card justify-center items-center'>
                        <h2 className="text-2xl card-title text-secondary mb-2">{parts.name}</h2>
                        <div className="w-32 rounded">
                            <img src={parts.img} alt={parts.name} />
                        </div>
                    </div>
                    <div>
                        <p> <b>Description:</b> {parts.description}</p>
                        <p> <b>Minimum Order Products:</b> {parts.minimumOrder}</p>
                        <p><b>{parts.quantity} {parts.quantity > 1 ? 'product' : 'product'} Available</b></p>
                        <p><b>Price:</b> $ {parts.price}</p>
                        <p> <b>Purchase Quantity:</b> <input type="number" onChange={(e) => setPurchaseQuantity(e.target.value)} placeholder="Purchase Quantity" onBlur={handleQuantity} className="input input-bordered input-sm w-full max-w-xs" /></p>
                        {purchaseError}
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs mt-1" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs mt-1" />
                        <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs mt-1" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs mt-1" />

                    </div>

                    <div className="card-actions justify-center">
                        <label
                            className="btn btn-sm btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary" onClick={handleOrder}>Confirm Order
                        </label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;