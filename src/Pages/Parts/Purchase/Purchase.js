import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = ({ setOrder }) => {
    const {partsId} = useParams();
    const [parts, setParts] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/parts/${partsId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setParts(data))
    },[])
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:mx-5">
        <div className="card-body justify-center items-center">
            <h2 className="text-2xl card-title text-secondary">{parts.name}</h2>
            <div className="w-32 rounded">
                <img src={parts.img} alt={parts.name} />
            </div>
            <p> <b>Description:</b> {parts.description}</p>
            <p> <b>Minimum Order:</b> {parts.minimumOrder}</p>
            <p><b>{parts.quantity} {parts.quantity > 1 ? 'product' : 'product'} Available</b></p>
            <p><b>Price:</b> $ {parts.price}</p>

            <div className="card-actions justify-center">
                <label
                    htmlFor="order-modal"
                    disabled={parts.quantity < parts.minimumOrder}
                    onClick={() => setOrder(parts.product)}
                    className="btn btn-sm btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">Purchase Order</label>

            </div>
        </div>
    </div>
    );
};

export default Purchase;