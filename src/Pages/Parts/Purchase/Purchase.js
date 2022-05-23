import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { partsId } = useParams();
    const [parts, setParts] = useState({});
    const [purchaseQuantity, setPurchaseQuantity] = useState()
    useEffect(() => {
        const url = `http://localhost:5000/parts/${partsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    const handleQuantity=()=>{
        let newQuantity = parseInt(purchaseQuantity)
        newQuantity = parts.quantity - newQuantity
        console.log(newQuantity);
        let partsUpdate= {...parts, quantity: newQuantity}
        console.log(partsUpdate);
        setParts(partsUpdate)
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:mx-5 ">
            <div className="card-body ">
                <div className='card justify-center items-center'>
                    <h2 className="text-2xl card-title text-secondary mb-3">{parts.name}</h2>
                    <div className="w-32 rounded">
                        <img src={parts.img} alt={parts.name} />
                    </div>
                </div>
                <div>
                    <p> <b>Description:</b> {parts.description}</p>
                    <p> <b>Minimum Order Products:</b> {parts.minimumOrder}</p>
                    <p><b>{parts.quantity} {parts.quantity > 1 ? 'product' : 'product'} Available</b></p>
                    <p><b>Price:</b> $ {parts.price}</p>
                    <p> <b>Purchase Quantity:</b> <input type="number" onChange={(e)=>setPurchaseQuantity(e.target.value)} placeholder="Purchase Quantity" onBlur={handleQuantity} class="input input-bordered input-sm w-full max-w-xs" /></p>
                </div>

                <div className="card-actions justify-center">
                    <label
                        className="btn btn-sm btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">Confirm Order
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Purchase;