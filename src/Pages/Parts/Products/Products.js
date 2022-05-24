import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderModal from '../OrderModal/OrderModal';
import Purchase from '../Purchase/Purchase';

const Products = ({ product }) => {
    const {_id, name, img, description, minimumOrder, quantity, price } = product;
    
    const [order, setOrder] = useState(null);

    const navigate = useNavigate();
    const navigateToPartsDetails = (_id) =>{
        navigate(`/parts/${_id}`)
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:mx-5">
            <div className="card-body justify-center items-center">
                <h2 className="text-2xl card-title text-secondary">{name}</h2>
                <div className="w-32 rounded">
                    <img src={img} alt={name} />
                </div>
                <p> <b>Description:</b> {description}</p>
                <p> <b>Minimum Order:</b> {minimumOrder}</p>
                <p><b>{quantity} {quantity > 1 ? 'product' : 'product'} Available</b></p>
                <p><b>Price:</b> $ {price}</p>

                <div className="card-actions justify-center">
                    <label
                        disabled={quantity < minimumOrder}
                        // onClick={() => setOrder(product)}
                        onClick={()=>navigateToPartsDetails(_id)}
                        className="btn btn-sm btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">Purchase Order</label>

                </div>
            </div>
            {order && <Purchase order={order} setOrder={setOrder}> </Purchase>}
        </div>
    );
};

export default Products;